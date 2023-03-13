# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. **TASK: Create Database Table for Custom Facility Ids** 
  * Acceptance Criteria: A Table should be created that stores the ids for each Facility and associated Agent.
  * Estimated Time/Effort: 6 hours
  * Implementation Details:
    * SQL: Create a table containing columns for the facility id (facility_id), agent id (agent_id), and a custom facility id (facility_cust_id) to classify/differentiate the two e.g custom facility id can be saved with a format taking the first three letters or abbreviation of the facility name and appending it to the last two digit of the year the agent was registered to the facility i.e CBH22.
    * API: API endpoint to add and update items from table.
 

2. **Task: Update `getShiftsByFacility()` to Include Custom Facility Ids**
    * Acceptance Criteria:  The function should be updated so that the Facility ids passed to the function can check both the existing facility table for database Id and the custom facility for the custom id created by the facility, allowing Companies with custom ids to properly access their Shifts.
    * Estimated Time/Effort: 4 hours
    * Implementation Details:
        * SQL: Add a new query to the existing `getShiftsByFacility()`  statement that checks both internal and external/customised identifiers.
        * API: Update the endpoint to include both internal and external ids. 


3. **Task: Update `generateReport()` to Include Custom Facility Ids**
    * Acceptance Criteria: The function should be updated to take into account both database id and customised id when generating a report.
    * Estimated Time/Effort: 2 hours
    * Implementation Details:
        * SQL: The query for retrieving the list of Shifts should be updated to include both internal and external ids.
        * PDF: The PDF report will need to be adjusted to include the proper identifiers for each Agent. 


4. **Task: Create Tests for All Updated Functions**
   * Acceptance Criteria: A testing suite should be created to verify that all functions are working as expected.
   * Estimated Time/Effort: 3 hours
   * Implementation Details:
      * Unit Tests: Write unit tests to verify that each function behaves as expected.
      * Integration Tests: Write integration tests to ensure that all functions are correctly integrated. 


5. **Task: Implement Final Ticket with QA**
   * Acceptance Criteria: All tickets should be merged together and verified by Quality Assurance before being pushed to production.
   * Estimated Time/Effort: 1 hour
   * Implementation Details:
      * Merging: Git should be used to properly merge all the tickets before they are pushed to production.
      * QA: All the work should be checked by Quality Assurance before production.



