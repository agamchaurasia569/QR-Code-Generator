import inquirer from 'inquirer';
import qr from 'qr-image';//qr-image is module and we are looking to qr throught module.
import fs from "fs";
inquirer
  .prompt([{
    message : "Type in your URL",
    name: "URL"
  }

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;  
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile('URL.txt', url, (err) => {//file created that is called as url.txt
      if (err) throw err;
      console.log('The file has been saved Successfully!');
});
})

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
