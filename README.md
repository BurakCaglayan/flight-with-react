# Flight App with React without UI Library

#### Screenshot

![Flight App With React][home-screenshot]
![Flight App With React][flightList-screenshot]
#### Description

Flight app, is a simple application developed using React, Vite, React Hooks, react-fontawesom and more.
It was a project where I wanted to try new things. Of course something has more than one solution. And better it can be ofcourse.
### Built With

The major frameworks used when built the project:

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React-Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [i18n](https://react.i18next.com/)
- [Scss](https://sass-lang.com/)
- [Font-awesome](https://fontawesome.com/)
- Atomic Design principles (Not exactly. But it has been tried)
- SASS 7-1 folder pattern (Has been tried)

## Getting Started

To get a local copy up and running follow steps:

### Prerequisites

This project is currently not dependent on any back-end, database or prerequisites. You can continue with the steps below.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/BurakCaglayan/flight-with-react.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```
3. Start Project

   ```JS
   npm run dev
   ```

## Usage

You have to choose from a certain number of airports. (The date button is just for decoration, it doesn't work :) Choose how many seats you want on the plane. As the numbers increase, the counter on the button will increase and the icon will change. Then click on the continue button.

If there is no flight planned between the airports you selected, it will redirect you to the error page. If there is a flight plan suitable for your selection, all available flights will be listed. You can sort by using the buttons on the top right of this page. Cheap package or depending on departure time.

There is a promotional switch button above. If you click on it you will see that some buttons are disabled and some prices are halved.

After you decide on your flight, press one of the red buttons and see how much you will pay on the successful page.

### What could be better? What can be added?
- Scss can be used more effectively. If a design line is established, many things can be moved to the variables file. It is difficult to design by eye. Still, this project deserved a better style study.
- Some functions and lines such as set or get items to localstorage could actually be managed more smoothly and within common.
- I know the design doesn't look very appealing. I'll try to get my hands on it and refactor it over time.

### What have I tried in this app?
- I developed the entire design without using any UI library. I wrote animations, albeit small ones.
- Project using scss.
- I tried to SASS 7-1 folder pattern.
- I tried to develop by following the Atomic Design principles. I developed reusable components.
- I developed a largely responsive design.
- I used localStorage not redux or context :) Why not?

#### More Screenshot

![Flight App With React][flightList-screenshot2]
![Flight App With React][succesPage-screenshot]
![Flight App With React][errorPage-screenshot]

[home-screenshot]: https://i.ibb.co/HK200zH/Screenshot-2024-06-04-at-09-35-53.png
[flightList-screenshot]: https://i.ibb.co/dmkKFDX/Screenshot-2024-06-04-at-09-36-10.png
[flightList-screenshot2]: https://i.ibb.co/S6chrHv/Screenshot-2024-06-04-at-09-36-17.png
[succesPage-screenshot]: https://i.ibb.co/HHfMmTD/Screenshot-2024-06-04-at-09-36-31.png
[errorPage-screenshot]: https://i.ibb.co/3YSQMc5/Screenshot-2024-06-04-at-09-36-49.png
