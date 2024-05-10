``` mermaid
sequenceDiagram
    participant browser
    participant server


    Note right of browser: The user fills the form and clicks the submit button
    Note right of browser: The browser saves the note in the notes array in spa.js
    Note right of browser: The browser manipulates the DOM to render the notes
    Note right of browser: The browser renders the notes along with the new added note

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: Note data from form is sent as the body of the POST request to the server
    Note left of server: The server saves the note to the notes array in data.json
    deactivate server
```