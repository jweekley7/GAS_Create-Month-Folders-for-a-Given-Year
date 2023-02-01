/**
 * To run, add the parentFolderId.
 * If you want to specify the year folder, update folderYear. Leave blank for the current year.
 */


/** Step 1 **/
/** Change these values below **/

const parentFolderId = 'folder-ID-here'; //Make sure the ID is in quotations
//const folderYear = '20__'; //Enter the year here in quotations and remove the two slashes in front of 'const'.

/** **/

function main(parentFolderId, folderYear) {
  
  let year;

  if (folderYear) {
    year = getThisYearFromDate(folderYear);
  } else {
    year = getThisYearFromDate();
  };

  createFolderNames(year).forEach((folderName) => {
    createFolders(parentFolderId, folderName);
  });

};

function getThisYearFromDate(manualYear) {
  if (manualYear) {
    return manualYear.toString().substring(2,4);
  } else {
    const today = new Date();
  return today.getFullYear().toString().substring(2,4);
  };
};

//Returns ex: '1-Jan 22'
function createFolderNames(year) {
  const monthFolders = [
    '1-Jan ',
    '2-Feb ',
    '3-Mar ',
    '4-Apr ',
    '5-May ',
    '6-Jun ',
    '7-Jul ',
    '8-Aug ',
    '9-Sep ',
    '10-Oct ',
    '11-Nov ',
    '12-Dec ' 
  ];

  const folderNames = monthFolders.map((val) => {
    const name = val + year;
    return name;
  });

  return folderNames;
}

function createFolders(parentFolderId, folderName) {
  const parentFolder = DriveApp.getFolderById(parentFolderId);
  parentFolder.addFolder(DriveApp.createFolder(folderName));
};
