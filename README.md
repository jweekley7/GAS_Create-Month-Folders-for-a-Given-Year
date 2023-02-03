# GAS Create Month Folders for a Given Year

This will allow you to create a Drive folder for each month for a given year. If you do not specify the year, it will do it for the current year.

![image](https://user-images.githubusercontent.com/91277836/216030698-fa0a292b-5a7e-4107-84f1-e7dbfb302856.png)

## Instructions:

1. Begin a new project in GAS (Google Apps Script) - https://developers.google.com/apps-script/guides/projects
2. Copy and paste the entire script file into your project.
3. Update the vairables in the 'Step 1' section
    1. You MUST enter the parent folder ID. The line should look like this when you're done: `const parentFolderId = '1vE-Fa7q_Vt_IsRWbCC9ZzXBv2J7';`. This folder ID is the folder where you want the year folder to go.
    2. OPTIONAL: Enter the desired year or you may leave this blank. Doing so will append each folder with the current year.
4. Save then run the project.
