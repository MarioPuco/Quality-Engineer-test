## Introduction
Within this repo you can find solutions for "Quality Engineer - Technical Test Take Home.pdf"

## Table of Contents
 Task 1 -
 - Identified 5 critical scenarios for e-commerce platform. Manual Test Cases can be found in "Task1.txt" file.

Task 2.1 -
 - **login-logout.spec.js** - Functional Test Case that performs simple login-logout to https://magento.softwaretestingboard.com/
 - **purchase.spec.js** - Functional Test Case that perfroms login > Add to Cart > Checkout 
 - **register.spec.js** - Functional Test Case that performs user sign up

Task 2.2 -
 - **api_tests.spec.js** - 
    - Test - List Users API Call - GET request Test
    - Test - Create user API Call - POST request Test
    - Test - Update API Call - PUT request Test
      
## How to run
 
1. To run login-logout test, run `npx playwright test ./task2.1/login-logout`
