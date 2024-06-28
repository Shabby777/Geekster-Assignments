const axios = require('axios');
const cheerio = require('cheerio');
const XLSX = require('xlsx');

(async () => {
  try {
    // Fetch the HTML of the page
    const { data } = await axios.get('https://www.naukri.com/it-jobs?src=gnbjobs_homepage_srch');
    
    // Load the HTML into Cheerio
    const $ = cheerio.load(data);
    
    // Scrape the job postings
    const jobs = [];
    
    $('.job-listing').each((index, element) => {
      const jobTitle = $(element).find('.job-title').text();
      const jobLink = $(element).find('a').attr('href');
      jobs.push({ title: jobTitle, link: jobLink });
    });
    
    // Log the job postings
    console.log(jobs);

    // Create a new workbook and a new worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(jobs);
    
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Job Postings');
    
    // Write the workbook to a file
    XLSX.writeFile(workbook, 'job_postings.xlsx');
    
    console.log('Data written to job_postings.xlsx');
  } catch (error) {
    console.error('Error fetching the job postings:', error);
  }
})();
