
import DenzelPDF from "./DenzelUdemba.pdf"

    // Function will execute on click of button
    const OnButtonClick = () => {
      // using Java Script method to get PDF file
      fetch(DenzelPDF).then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = DenzelPDF;
              alink.click();
          })
      })
  }

  export default OnButtonClick;