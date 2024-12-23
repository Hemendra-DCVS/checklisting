
# Checklist Using Node.js

## Project Overview
This project implements a simple **Checklist System** using Node.js. It evaluates specific conditions (checklist rules) based on input data fetched from an API and displays the evaluation results on a dashboard. The dashboard indicates whether each rule has **Passed** or **Failed**.

---

## Features
- Fetches input data dynamically from an API.
- Modular rules configuration for easy scalability.
- Clean and maintainable code.
- A simple, user-friendly dashboard to display results.

---

## API Details
**Endpoint:**
```
http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639
```

---

## Checklist Rules
1. **Valuation Fee Paid**: `isValuationFeePaid` should be `true`.
2. **UK Resident**: `isUkResident` should be `true`.
3. **Risk Rating Medium**: `riskRating` should be `"Medium"`.
4. **LTV Below 60%**: Calculate Loan-to-Value as:
   ```
   (Loan Required / Purchase Price) * 100
   ```
   Ensure it is less than 60%.

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd checklist-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage
1. Start the server:
   ```bash
   node index.js
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Project Structure
```
checklist-system/
├── index.js          # Main server file
├── rules.js          # Checklist rules configuration
├── public/           # Frontend files
│   ├── index.html    # Dashboard HTML
│   └── style.css     # (Optional) Custom styles
└── package.json      # Project metadata and dependencies
```

---

## Adding or Modifying Rules
1. Open the `rules.js` file.
2. Add a new rule object to the array:
   ```javascript
   {
     id: 'uniqueRuleId',
     description: 'Rule Description',
     evaluate: (data) => {
       // Custom evaluation logic
       return data.someField === 'someValue';
     },
   }
   ```
3. Save the file. The system will automatically incorporate the new rule.

---

## Example Output
### **Dashboard**
| Condition           | Status  |
|---------------------|---------|
| Valuation Fee Paid  | Passed  |
| UK Resident         | Passed  |
| Risk Rating Medium  | Failed  |
| LTV Below 60%       | Passed  |

---

## Technologies Used
- **Node.js**: Backend framework.
- **Express.js**: Web server framework.
- **Axios**: For API requests.
- **HTML/CSS/JavaScript**: Frontend for the dashboard.



