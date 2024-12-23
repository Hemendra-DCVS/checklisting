const express = require('express');
const axios = require('axios');
const rules = require('./rules');

const app = express();
const PORT = 3000;

// Fetch data from the API
async function fetchData() {
  const url = 'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch application data.');
  }
}

// Evaluate checklist rules
function evaluateRules(data) {
  return rules.map((rule) => ({
    id: rule.id,
    description: rule.description,
    passed: rule.evaluate(data),
  }));
}

// API to serve results
app.get('/checklist', async (req, res) => {
  try {
    const data = await fetchData();
    const results = evaluateRules(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve frontend
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
    