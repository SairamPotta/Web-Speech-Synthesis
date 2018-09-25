# Web-Speech-Synthesis

Web Speech Synthesis component is created using simple JavaScript. It takes input from user through voice or text and gives respective output.

## Output Format
<p align='center'><img src="https://github.com/KNVSAIRAM/dynamic-accordion/blob/master/Images/output1.jpg"></p>

To preview demo of Web-Speech-Synthesis Project, [Click Here](https://stackblitz.com/edit/js-7v2lxq?embed=1&file=index.js&view=preview)

## Getting Started
Download the Web-Speech-Synthesis project and run the **index.html** file.

## Description

### Text to Voice
  In Javascript there is a window object method called **window.speechSynthesis** and class called **SpeechSynthesisUtterance** which will take the input from user through text box and convert it into voice.
  
  **SpeechSynthesisUtterance** -- Voice accent will be customised based on following requirements
  - **Rate**      --  'Rate of speed'
  - **Pitch**     --  'Tone'
  - **Language**  -- ' Output Language'

### Voice to Text
  In Javascript there is a class called **webkitSpeechRecognition** it will convert user voice to text.
  
  There are two buttons available to start and stop the recording of voice.
  
## How it works
  
  Add the script file in HTML form and user have to give following id's for corresponding form fields.
  
  - **text-input** -- for "text to voice" (textarea formfield)
  - **listen-voice**-- for "text to voice" (button field)
  
  - **voice-text-input** -- for "voice to text" (textarea formfield)
  - **start** -- for "start recording" (button field)
  - **stop** -- form "stop recording" (button field)
  
  Above fields are mandatory to maintain
    
    
