# Brandwatch Word Cloud

This is a Brandwatch front-end developer challenge, where I've created word cloud that displays the topics fetched from `topics.json` file.\
It is deployed as GitHub pages, feel free to check it [here](https://vzaboraite.github.io/brandwatch-word-cloud/).

## Fulfilled requirements

**1) 6 different text sizes depending on mentions volume:**\
The text size is chosen according to the topic mentions total volume. See the table below:

| Topic volume  | >100 | >40 | > 20 | >13 | >8  | <=8 |
| ------------- | ---- | --- | ---- | --- | --- | --- |
| **Text Size** | 120  | 60  | 50   | 40  | 30  | 20  |

**2) Word/topic colour depending on sentiment score:**

- If the score is > 60, the topic is displayed in green;
- If the score is < 40, the topic is displayed in red;
- All of the rest topics are displayed in grey.

**3) When the topic is clicked, the information of that specific topic is displayed on the side:**

- `topic`;
- `total volume`/mentions;
- how the volume is broken down into `positive`, `neutral` and `negative` sentiments/mentions.

## Tech used

- Project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app) with [TypeScript](https://create-react-app.dev/docs/adding-typescript/) template.
- To generate word cloud I used [react-d3-cloud](https://www.npmjs.com/package/react-d3-cloud) component, which is built with [d3-cloud](https://github.com/jasondavies/d3-cloud).

## To run locally

1. To clone project repository, copy the command below and run it in your terminal:

```bash
git clone https://github.com/vzaboraite/brandwatch-word-cloud.git
```

2. In the project directory run:

```bash
# to install required dependencies for the project:
npm install

# to start development server on http://localhost:3000:
npm start
```
