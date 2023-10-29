import { cyStringify, cyParse } from "../";
import { pluck } from "ramda";

const roundRobin = (segments: number) => {
  if (segments <= 0) {
    return [];
  }

  const list = [];
  let prev = null;

  for (let i = 0; i < segments; ++i) {
    prev = list[i] = { prev };
  }

  list[0].prev = list[segments - 1];

  return list;
};

const simpleNestedObject = () => {
  const sample = {
    property: "value",
    self: undefined
  };
  sample.self = sample;

  return sample;
};

const complexNestedObject = () => {
  const sample = {
    property: "value",
    another: {
      property: "another value",
      self: undefined
    },
    self: undefined
  };
  sample.another.self = sample.another;
  sample.self = sample;

  return sample;
};

const objectWithParallelReferences = () => {
  const property = {
    value: 42,
    sibling: undefined
  };

  const sample = {
    property1: property,
    property2: property
  };

  sample.property1.sibling = sample.property2;
  sample.property2.sibling = sample.property1;

  return sample;
};

const getValue = pluck("value");
const getExpectedValue = pluck("expected");

describe("cycle", () => {
  describe("when used with primitives", () => {
    const primitivesInput: {
      description: string;
      value: any;
    }[] = [
      { description: "number", value: 1.5 },
      { description: "string", value: "hi" },
      { description: "boolean", value: true },
      { description: "null", value: null },
      { description: "undefined", value: undefined }
    ];
    it("should behave like JSON.stringify", () => {
      expect(cyStringify(primitivesInput)).toStrictEqual(JSON.stringify(primitivesInput));
    });

    it("should behave like JSON.parse", () => {
      const primitivesInputWithExpectedValue: {
        description: string;
        value: string;
        expected: any;
      }[] = [
        { description: "number", value: "1.5", expected: 1.5 },
        { description: "string", value: '"hi"', expected: "hi" },
        { description: "boolean", value: "true", expected: true },
        { description: "null", value: "null", expected: null },
        { description: "undefined", value: "undefined", expected: undefined }
      ];
      expect(cyParse(JSON.stringify(primitivesInput))).toStrictEqual(JSON.parse(JSON.stringify(primitivesInput)));
      expect(getValue(cyParse(JSON.stringify(primitivesInput)))).toStrictEqual(
        getExpectedValue([...primitivesInputWithExpectedValue])
      );
    });
  });
  describe("when used with acyclic objects", () => {
    const acyclicObj: {
      description: string;
      value: any;
    }[] = [
      { description: "empty object", value: {} },
      { description: "simple object", value: { name: "Jan" } },
      { description: "nested object", value: { l1: { l2: "value" } } },
      { description: "empty array", value: [] },
      { description: "simple array", value: ["1", 2, 3.0] },
      { description: "nested array", value: [["1"], [["2"]], "3"] },
      { description: "mixed", value: [{ values: [1, { name: "Jan" }] }] }
    ];
    it("should behave like JSON.stringify", () => {
      expect(cyStringify(acyclicObj)).toStrictEqual(JSON.stringify(acyclicObj));
    });
    it("should behave like JSON.parse", () => {
      const stringifiedAcyclicObj = JSON.stringify(acyclicObj);
      const acyclicObjWithExpectedValue: {
        description: string;
        value: string;
        expected: any;
      }[] = [
        { description: "empty object", value: "{}", expected: {} },
        { description: "simple object", value: '{"name":"Jan"}', expected: { name: "Jan" } },
        { description: "nested object", value: '{"l1":{"l2":"value"}}', expected: { l1: { l2: "value" } } },
        { description: "empty array", value: "[]", expected: [] },
        { description: "simple array", value: '["1",2,3]', expected: ["1", 2, 3.0] },
        { description: "nested array", value: '[["1"],[["2"]],"3"]', expected: [["1"], [["2"]], "3"] },
        { description: "mixed", value: '[{"values":[1,{"name":"Jan"}]}]', expected: [{ values: [1, { name: "Jan" }] }] }
      ];
      expect(cyParse(stringifiedAcyclicObj)).toStrictEqual(JSON.parse(stringifiedAcyclicObj));
      expect(getValue(cyParse(stringifiedAcyclicObj))).toStrictEqual(getExpectedValue([...acyclicObjWithExpectedValue]));
    });
  });
  describe("when used with cyclic objects", () => {
    describe("JSON.stringify", () => {
      it("should fail because of a circular reference in a round robin list", () => {
        expect(() => JSON.stringify(roundRobin(2))).toThrow(TypeError);
      });

      it("should fail because of a circular reference in simple nested object", () => {
        expect(() => JSON.stringify(simpleNestedObject())).toThrow(TypeError);
      });

      it("should fail because of a circular reference in complex nested object", () => {
        expect(() => JSON.stringify(complexNestedObject())).toThrow(TypeError);
      });

      it("should fail because of a cycles in object with parallel references", () => {
        expect(() => JSON.stringify(objectWithParallelReferences())).toThrow(TypeError);
      });
    });
    describe("stringify", () => {
      it("should serialise a round robin list data structure", () => {
        expect(cyStringify(roundRobin(1))).toStrictEqual('[{"prev":{"$ref":"$[0]"}}]');
      });

      it("should serialise a simple nested object", () => {
        expect(cyStringify(simpleNestedObject())).toStrictEqual('{"property":"value","self":{"$ref":"$"}}');
      });

      it("should serialise a complex nested object", () => {
        expect(cyStringify(complexNestedObject())).toStrictEqual(
          '{"property":"value","another":{"property":"another value","self":{"$ref":"$[\\"another\\"]"}},"self":{"$ref":"$"}}'
        );
      });

      it("should serialise an object with parallel references", () => {
        expect(cyStringify(objectWithParallelReferences())).toStrictEqual(
          '{"property1":{"value":42,"sibling":{"$ref":"$[\\"property1\\"]"}},"property2":{"$ref":"$[\\"property1\\"]"}}'
        );
      });
    });

    describe("parse", () => {
      it("should deserialise a round robin list data structure", () => {
        expect(cyParse(cyStringify(roundRobin(1)))).toMatchObject(roundRobin(1));
      });

      it("should deserialise a simple nested object", () => {
        expect(cyParse(cyStringify(simpleNestedObject()))).toMatchObject(simpleNestedObject());
      });

      it("should deserialise a complex nested object", () => {
        expect(cyParse(cyStringify(complexNestedObject()))).toMatchObject(complexNestedObject());
      });

      it("should deserialise an object with parallel references", () => {
        expect(cyParse(cyStringify(objectWithParallelReferences()))).toMatchObject(objectWithParallelReferences());
      });
    });
  });
});
