const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "pkg_name",
      message: "package name:",
      default: 'index.js'
    },
    {
      type: "input",
      name: "ver",
      message: "version:",
      default: '1.0.0'
    },
    {
      type: "input",
      name: "description",
      message: "description:",
    },
    {
      type: "input",
      name: "entry_point",
      message: "entry point:",
      default: 'index.js'
    },
    {
      type: "input",
      name: "test_command",
      message: "test command:",
    },
    {
      type: "input",
      name: "git_repository",
      message: "git repository:",
    },
    {
      type: "input",
      name: "keywords",
      message: "keywords:",
    },
    {
      type: "input",
      name: "author",
      message: "author:",
    },
    {
      type: "input",
      name: "license",
      message: "license:",
      default: "ISC"
    },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log('answers ==>', answers)
    fs.
      fs.writeFileSync('myPackage.json', JSON.stringify(answers, null, 2), (err) => {
        if (err) {
          console.log('Success')
        } else {
          console.log('Fail')
        }

      })
    // let languageSpoken = '';
    // let lngArray = answers.program_spoken;
    // for (let i = 0; i < lngArray.length; i++) {
    //   if (i === (lngArray.length - 1)) {
    //     languageSpoken += lngArray[i]
    //   } else {
    //     languageSpoken += lngArray[i] + ', '
    //   }
    // }
    // console.log('Welcome to the program ' + answers.firstname)
    // console.log('I liked that you speak ' + languageSpoken)
    if (answers.my_list === 'Yes') {
      console.log('Congrats! all the best of luck with your future')
    } else {
      console.log('I\'m so sorry 😕')
    }
  })

  .catch(error => {
    console.error(error)
  });
