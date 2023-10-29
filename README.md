# Technical Test Digital Solution
Designing a high-level digital solution for LogiTech Limited's "Logistics as a Service" offering requires addressing the identified pain points of customers. Below is a conceptual architecture for the frontend and backend of the solution using the specified technologies. Keep in mind that this is a high-level design, and the actual implementation would require detailed design, development, and testing.

Note that basically the code is almos empty including mostly the folder of each project structure. The docker componse also works correctly syncying th back-end, mongo db and front-end.

Run the following command in the project root directory to start the application:

```bash
docker-compose up --build

# Run below command if prevous command shouldn't fail.
docker-compose down -v
```

## Frontend (React, Redux, Axios):

### 1. Use Server Sider Render server-side rendering:
- Next.js is a React framework that provides server-side rendering (SSR), static site generation (SSG), and routing out of the box.
- Use Next.js for building the customer portal, admin dashboard, and mobile app (if needed).
- Leverage Next.js features like server-side rendering to improve SEO and initial page load performance.
- Simplify routing by defining page routes in the pages directory.
- Utilize Next.js API routes for creating serverless backend endpoints, such as handling user authentication and interacting with your Node.js backend.
- Continue using Redux and Axios for state management and API calls, respectively, as you would in a standard React application.
- Implement code splitting and lazy loading of components for optimized page load times.

### 2. Customer Portal:
This is the user-facing part of the application where customers interact with LogiTech's services.

It includes the following features:
  - User registration and login with secure authentication.
  - Dashboard displaying package delivery history and current status.
  - Package booking and tracking:
    - Customers can input package details, including dimensions, weight, and destination.
    - Real-time shipping cost estimation.
    - Ability to schedule a pickup.
    - Tracking functionality to see where the package is in real-time.
  - Payment integration (e.g. Stripe):
    - Secure payment gateway integration for online payments.
    - Option to save payment methods for convenience.
  - Loyalty program enrollment and rewards tracking.

### 3. Admin Dashboard:
LogiTech's staff will use this dashboard for package management and customer support.

Features include:
  - Customer management.
  - Package tracking and management.
  - Real-time customer support chat.
  - Analytics and reporting.

### 4. Mobile App (Optional):
Develop a mobile app for both iOS and Android platforms to offer a seamless user experience on mobile devices.
The app should provide the same functionality as the web portal.

## Backend (NodeJS, Express, Typescript, Docker):

### 1. API Layer:
- Implement a RESTful API that serves as the bridge between the frontend and backend.
- API endpoints include:
  - User authentication and authorization.
  - Package booking and tracking.
  - Quoate processing.
  - Payment processing.
  - Loyalty program management.
  - Customer support chat.

### 2. Database:
- Use a database (e.g., PostgreSQL or MongoDB) to store customer data, package information, payment records, and chat logs.
- Ensure data security and compliance with privacy regulations.

### 3. Payment Gateway Integration:
- Integrate a reliable payment gateway (e.g., Stripe or PayPal) for secure online payments.
- Implement tokenization for storing payment data securely.

### 4. Chat Support:
Implement a real-time chat system using technologies like WebSockets to facilitate customer support.

### 5. Containerization (Docker):
- Dockerize the backend services for easy deployment and scalability.
- Use Docker Compose to manage the entire application stack.

### 6. Monitoring and Logging:
Implement monitoring and logging solutions (e.g., Prometheus and Grafana) to track the application's performance and troubleshoot issues.

### 7. Security:
Implement security best practices, including data encryption, input validation, and access control.
Regularly update dependencies to patch known vulnerabilities.

## Additional Technologies:
- **Nginx**: Use Nginx as a reverse proxy to manage incoming web traffic and improve application security.
- **Redis**: Employ Redis for caching frequently accessed data and managing real-time features.
- **JWT** (JSON Web Tokens): Use JWT for secure authentication and authorization.
- **AWS/Azure/GCP**: Depending on the hosting environment, utilize cloud services for scalability, backup, and disaster recovery.

## Testing
### Jest (Frontend and Backend Testing):
- Jest is a popular JavaScript testing framework that can be used for unit and integration testing.
- Use Jest for writing unit tests for your React components in the frontend. It's particularly useful for testing individual components and their behavior.
- For the backend (Node.js API), Jest can be used for testing API endpoints, database interactions, and business logic.
- You can write test suites and test cases to ensure that your code functions correctly and reliably.
- Configure Jest to run tests automatically whenever code changes are detected (e.g., using Jest watch mode).

### Cypress (End-to-End Testing):
- Cypress is a powerful tool for end-to-end testing of your web application.
- Use Cypress to write test scripts that simulate user interactions with your application in a browser. This includes testing user flows, form submissions, and UI interactions.
- Cypress provides a real-time view of your application as the tests run, making it easy to diagnose issues.
- Write end-to-end tests to ensure that the entire application functions as expected from the user's perspective.
- Integrate Cypress into your CI/CD pipeline to automate testing on each code push.

### GitHub Actions (CI/CD):
GitHub Actions is a CI/CD platform integrated with GitHub, allowing you to automate various aspects of the development lifecycle.

- Create GitHub Actions workflows to automate the following tasks:
  - **Build and Test**: Set up a workflow to build your React frontend and Node.js backend, run Jest and Cypress tests, and generate test reports.
  - **Dockerize**: Build Docker images for your frontend and backend as part of the CI/CD process.
  - **Deploy**: Depending on your deployment strategy (e.g., AWS Elastic Beanstalk, Azure App Service, or custom Docker deployments), automate the deployment of your application to your chosen hosting environment.
  - **Continuous Integration**: Ensure that tests are run automatically on each push to the repository, and prevent merging code that doesn't pass tests.
  - **Deployment to Staging/Production**: Define separate workflows for deploying to staging and production environments, with proper approval steps in between.
  - **Notifications**: Set up notifications or alerts for various workflow events, such as failed tests or successful deployments.

Integrating Jest and Cypress with GitHub Actions ensures that your application is thoroughly tested throughout its development lifecycle. Continuous integration and continuous deployment (CI/CD) practices help catch issues early, maintain code quality, and streamline the deployment process.

## Infrastructure as Code (IaC)
Including Infrastructure as Code (IaC) in the form of deployment scripts using tools like Terraform, AWS CloudFormation, or similar is a crucial part of your CI/CD pipeline. In the projects should be the `deployment` folder holding scripts to be used for the CI/CD pipelines to deploy the infrastructure .

## Security features and Log libraries

### 1. Security Libraries and Features:
- **SonarQube (Code Scanning)**: Integrating SonarQube into your CI/CD pipeline allows you to perform static code analysis for identifying and addressing code quality and security issues. Configure SonarQube to scan both the frontend (Next.js or React) and backend (Node.js) code.

- **Sanitize HTML (DOMPurify/sanitize-html)**: To prevent Cross-Site Scripting (XSS) attacks, use a library like DOMPurify to sanitize user-generated content and ensure that any HTML input is safe to render. Implement this within your React components.

- **XSS Prevention**: Implement client-side and server-side input validation and output encoding to prevent XSS attacks. Use libraries like xss or implement a custom solution to sanitize user input.

- **SQL Injection Prevention**: To protect against SQL injection attacks, use parameterized queries when interacting with your database. Most Node.js database libraries (e.g., pg, mysql2) support parameterized queries, which automatically escape user inputs.

- **Log Library (Buyan/wiston/etc)**: If you have a specific logging library named "Buyan," integrate it into your backend (Node.js) code for logging various events, errors, and security-related information. Make sure to configure log levels and store logs securely.

### 2. SonarQube Integration (GitHub Actions):
- Configure GitHub Actions to trigger SonarQube scans as part of your CI/CD pipeline.
- Define a SonarQube configuration file (e.g., sonar-project.properties) that specifies scanning parameters and exclusions.
- Use SonarQube plugins to detect and report security vulnerabilities, code smells, and bugs.

### 3. HTML Sanitization (Frontend):
- Implement DOMPurify/sanitize-html in your Next.js or React components to sanitize user-generated HTML content before rendering it on the web pages.
- Ensure that any data received from users or external sources is sanitized and validated.

### 4.XSS and SQL Injection Prevention (Backend):
Implement input validation and output encoding in your Node.js backend to prevent XSS attacks.
Utilize parameterized queries or ORM libraries with built-in SQL injection protection to prevent SQL injection attacks.

### 5. Logging with Buyan/Buyan/etc Library (Backend/Frontend):
- Integrate the "Buyan" log library into your Node.js backend to capture and log relevant events, errors, and security-related information.
- Configure log levels and destination (e.g., file logs, centralized log management systems).

These security measures and the integration of a log library will help enhance the security of your application by mitigating common vulnerabilities and ensuring that security events are properly logged and monitored. Additionally, regular security testing and code reviews should be part of your development process to identify and address potential security issues.