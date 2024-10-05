This is FE code challenge from CClarity

## Getting Started

Fist, run to install the module
```bash
yarn
```

Finally, run the development server:

```bash
yarn start
```

## Techstack
- Antd: Mostly UI framework when building React application. This library provide many component for all the case we need and easy to customize as well
- Tailwind: Another UI library but support styling directly base on className and very easy to use with Antd
- Redux Toolkit: Library for statement. I choose this because it base on Redux concept with with easy setup and handling side-effect with Redux Thunk also


## Feature
- Clicking a writing prompt button should update the input field's placeholder text
- The "Write with AI" button should be disabled when the input field is empty
- Clicking "Write with AI" should simulate an API call to a mock AI service
- Implement basic error handling for the mock AI service
- Add a character count display for the input field
- Implement a light/dark mode toggle

## Design Pattern 
- In this challenge, it's using Atoms Design Pattern