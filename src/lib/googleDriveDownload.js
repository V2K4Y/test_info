export const downloadFromGoogleDrive = (fileId, fileName = "") => {
  if (!fileId) {
    console.error("Google Drive file ID is required");
    return;
  }

  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const link = document.createElement("a");
  link.href = downloadUrl;
  
  if (fileName) {
    link.download = fileName;
  } else {
    link.download = "";
  }
  
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


