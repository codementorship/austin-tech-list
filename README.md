# Austin Tech List (Work in Progress)

Project to create a list of places in Austin that hire developers or places that support developers working remotely from Austin. Created by [Austin Code Mentorship](https://www.meetup.com/Austin-Code-Mentorship/).

## Usage

Install by running `npm install austin-tech-list` and import it...

```JavaScript
import austinTechList from 'austin-tech-list'
console.log(austinTechList) // [{}...]
```

...or require it.

```JavaScript
var austinTechList = require('austin-tech-list')
console.log(austinTechList) // [{}...]
```

It can also be referenced directly using a service such as `unpkg`...

```HTML
<script src="https://unpkg.com/austin-tech-list"></script>
<script>
  console.log(austinTechList) // [{}...]
</script>
```

## Suggesting an addition

If there's a company you'd like added to the list, you can [submit a suggestion here](https://github.com/codementorship/austin-tech-list/issues/new?assignees=&labels=enhancement%2C+good+first+issue&template=suggest-an-addition.md&title=Add+company%3A+%5BCOMPANY%5D).

## Contributing

This project was designed to help new developers get started with their first open source contribution. We welcome pull requests from newbies! If you can think of ways to make the experience easier for developers [submit an issue](https://github.com/codementorship/austin-tech-list/issues/new).

Remember, there's nothing to fear about submitting a pull request - everything gets [linted](https://en.wikipedia.org/wiki/Lint_%28software%29), tested, and reviewed before getting added to the `master` branch.

### List Requirements

There are a few things we test for before we accept changes to the list:

- Objects must have `name`, `homepage`, `careers`, `address`, and `plusCode` keys. No more and no less than those keys.

- Entries must be in alphabetical order. This includes things like "The" and "A" since we're just testing with the plain old JavaScript `Array.sort()` method.

- Addresses must be `Remote` or end with `Austin, TX \d{5}` where `\d{5}` is the five digit ZIP code. If you copy the address from Google Maps, it should be in this format.

- Plus codes must be in the format `XXXX-XX Austin, Texas` where the `X`s are the unique plus code. If you copy the plus code from Google Maps, it should be in this format.

- URLs must begin with `http://` or `https://`. If you copy the URL from your browser, it should be in this format.

### Contribution Dependencies

You'll need a few things before submitting a pull request.

1. [git](https://git-scm.com/) is a version management program that allows people to work collaboratively on software - it keeps track of changes. You'll need to install it on your computer if it's not installed.
2. [Github](https://github.com/) is cloud storage for git projects and a UI for collaborative development. You'll need an account if you don't have one already.
3. [Node](https://nodejs.org/en/) is a JavaScript runtime. You don't need to know JavaScript, we just use it to run maintenance tasks. You'll need to install it on your computer if it's not installed.
4. [npm](https://www.npmjs.com/) is a package manager for node. It'll download the libraries we use to run our maintenance tasks. You'll need to install it on your computer if it's not installed.

### Steps

You'll likely being using a [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface) to run these commands. This could be Terminal for Mac/Linux, Command Prompt for Windows, or your text editor's build-in terminal if it has one.

1. Use Github to fork the project. <sup>1</sup>

2. Clone the fork to your computer. <sup>2</sup>

3. Navigate into the project (ex: `cd austin-tech-list`).

4. Run the command `npm install` to install project dependencies.

5. Add an entry to the list in `index.js`:

```JavaScript
    {
      // The previous entry
    },

    {
      name: 'Company Name',
      homepage: 'https://www.companyname.com/',
      careers: 'https://www.companyname.com/jobs/',
      address: '123 E 6th St, Austin, TX 78701',
      plusCode: '1234+4H Austin, Texas',
    },

    {
      // The next entry
    },
```

6. Run the command `npm run pre-commit` when you're done with your changes. This will change the code to make it conform to our style standards and run tests to make sure everything works as expected. If you get errors here, it probably means a test failed (and your changes need to be tweaked).

7. Stage and commit your changes. <sup>3</sup>

8. Push your changes from the clone to your fork. <sup>4</sup>

9. Use Github to submit a pull request from your fork to the main project. <sup>5</sup>

<sup>1</sup> [How to fork a repo](https://help.github.com/en/articles/fork-a-repo)

<sup>2</sup> [How to clone a repo](https://help.github.com/en/articles/cloning-a-repository)

<sup>3</sup> [How to stage and commit changes](https://www.atlassian.com/git/tutorials/saving-changes)

<sup>4</sup> [How to push to a remote](https://help.github.com/en/articles/pushing-to-a-remote)

<sup>5</sup> [How to submit a PR](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork)

### Example Steps

_This is an example and may differ from your own experience. Read about and understand the concepts so that if you run into an error, you'll be better able to discern what the problem is._

1. Use Github to fork the repo.

2. `git clone https://github.com/[YOUR_USERNAME]/austin-tech-list.git`

3. `cd austin-tech-list`

4. `npm install`

5. Use your text editor to change `index.js`.

6. `npm run pre-commit`

7. `git add index.js; git commit -m "Added ExampleCo to list"`

8. `git push origin master`

9. Use Github to submit a PR.
