export function downloadFromDropboxShareLink(shareLink, fileName = "") {
  if (!shareLink) return console.error("shareLink required");

  let url;
  try {
    url = new URL(shareLink);
  } catch (e) {
    console.error("Invalid URL");
    return;
  }

  // Force direct download
  if (url.hostname.includes("dropbox.com")) {
    url.searchParams.set("dl", "1");
    // Optional raw link version:
    // url.hostname = "dl.dropboxusercontent.com";
  }

  const finalUrl = url.toString();

  // Create hidden link element
  const a = document.createElement("a");
  a.href = finalUrl;

  // This works only if Dropbox sends Content-Disposition header (it does for dl=1)
  if (fileName) a.download = fileName;

  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
