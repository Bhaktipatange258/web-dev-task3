const allQuestions = [
    {
      question: "Which feature allows you to copy attributes of selected text and apply them to another selection?",
      answers: [
        { text: "Merge Formatting command", correct: false},
        { text: "Copy and Paste Styles command", correct: false},
        { text: "Copy and Paste Attributes command", correct: false},
        { text: "Format Painter tool", correct: true},
      ]
    },
    {
      question: "To protect a document from accidental changes, which option should you select from the Protect Document (Windows) or Protect (Mac) menu?",
      answers: [
        { text: "Mark as Final.", correct: false},
        { text: "Add a Digital Signature.", correct: false},
        { text: "Encrypt with Password.", correct: false},
        { text: "Always Open Read-Only.", correct: true},
      ]
    },
    {
      question: "You are finalizing a two-page memo. Rather than having Word decide where page 1 ends, you want the next paragraph to begin on the top of page 2. How do you achieve this?",
      answers: [
        { text: "Change the bottom margin to your current location.", correct: false},
        { text: "Insert a page break.", correct: true},
        { text: "Press Shift + Enter (Shift + Return).", correct: false},
        { text: "Insert a column break.", correct: false},
      ]
    },
    {
      question: "How do you insert the content of an existing Word document into your current Word document?",
      answers: [
        { text: "Click Layout > Text > Text from File.", correct: false},
        { text: "Click Insert > Text > Building Blocks Organizer.", correct: false},
        { text: "Click Insert > Text > Text from File.", correct: true},
        { text: "Click Insert > Media.", correct: false},
      ]
    },
    {
      question: "Which feature lets you place a ghosted logo or text behind the regular text on your document?",
      answers: [
        { text: "Background.", correct: false},
        { text: "Watermark.", correct: true},
        { text: "Imagemark.", correct: false},
        { text: "Overlay.", correct: false},
      ]
    },
    {
      question: "Where do you select the paper size for a document?",
      answers: [
        { text: "Design > Size.", correct: false},
        { text: "File > Page Setup.", correct: false},
        { text: "Layout > Size.", correct: true},
        { text: "Layout > Margins.", correct: false},
      ]
    },
    {
      question: "Which option lets you mark your favorite templates for quick reuse in the future?",
      answers: [
        { text: "Drag to Home tab.", correct: false},
        { text: "Add to chooser.", correct: false},
        { text: "Pin to list.", correct: true},
        { text: "Mark as favorite.", correct: false},
      ]
    },
    {
      question: "If you want to add a caption to a table, where should you look?",
      answers: [
        { text: "Insert tab.", correct: false},
        { text: "Design tab.", correct: false},
        { text: "References tab.", correct: true},
        { text: "Layout tab.", correct: false},
      ]
    },
    {
      question: "How can you change the appearance of an entire table in a single step?",
      answers: [
        { text: "Apply a table style.", correct: true},
        { text: "Apply a graphic style.", correct: false},
        { text: "Right-click a table and choose a new style.", correct: false},
        { text: "Apply a cell style.", correct: false},
      ]
    },
    {
      question: "Which option does the Find and Replace feature **NOT** support?",
      answers: [
        { text: "Whole Word Only.", correct: false},
        { text: "Replace All.", correct: false},
        { text: "Check Spelling.", correct: true},
        { text: "Match Case.", correct: false},
      ]
    },
    {
      question: "Which statement best describes how a bookmark is used in a Word document?",
      answers: [
        { text: "A bookmark is a hyperlink where the label is automatically generated.", correct: false},
        { text: "A bookmark works in conjunction with hyperlinks to allow you to quickly jump to a specific location in your document.", correct: true},
        { text: "A bookmark is a link in your document that can give you quick access to webpages, files, and other locations within your document.", correct: false},
        { text: "A bookmark is a color-coded graphic that appears in the navigation pane for easy access to a specific location in your document.", correct: false},
      ]
    },
    {
      question: "What is **NOT** an option when inviting a colleague to collaborate on a document?",
      answers: [
        { text: "including a personalized message", correct: false},
        { text: "giving the collaborator the option to edit a document", correct: false},
        { text: "setting the collaborator's access to view only", correct: false},
        { text: "granting administrator access", correct: true},
      ]
    },
    {
      question: "You split a document into three sections. What happens if you change the margins in the first section?",
      answers: [
        { text: "The document reverts back to a single section with the new margin settings.", correct: false},
        { text: "The new margin settings are applied to all of the sections.", correct: false},
        { text: "The new margin settings are applied to the second and third sections.", correct: false},
        { text: "The new margin settings are applied to just the first section.", correct: true},
      ]
    },
    {
      question: "Which ribbon tab includes commands to add various types of objects or media to your document?",
      answers: [
        { text: "Insert", correct: true},
        { text: "File", correct: false},
        { text: "Layout", correct: false},
        { text: "Design", correct: false},
      ]
    },
    {
      question: "What type of page is useful at the front of a large document, to identify the document title, author, and other metadata?",
      answers: [
        { text: "cover page", correct: true},
        { text: "blank page", correct: false},
        { text: "master page", correct: false},
        { text: "table of contents page", correct: false},
      ]
    },
    {
      question: "Which command builds an overview of document contents based on applied headings styles?",
      answers: [
        { text: "Manage Sources", correct: false},
        { text: "Cross-Reference", correct: false},
        { text: "Insert Index", correct: false},
        { text: "Table of Contents", correct: true},
      ]
    },
    {
      question: "Which statistic does the Word Count feature **NOT** collect?",
      answers: [
        { text: "paragraphs", correct: false},
        { text: "lines", correct: false},
        { text: "page breaks", correct: true},
        { text: "characters (no spaces)", correct: false},
      ]
    },
    {
      question: "What is the default view when you open a document or create a new document?",
      answers: [
        { text: "Print Layout view", correct: true},
        { text: "Draft view", correct: false},
        { text: "Edit view", correct: false},
        { text: "Web Layout view", correct: false},
      ]
    },
    {
      question: "Which object type you cannot insert into a Word document from the **Insert** tab?",
      answers: [
        { text: "a sketch", correct: true},
        { text: "a symbol", correct: false},
        { text: "a 3D model", correct: false},
        { text: "an equation", correct: false},
      ]
    },
    {
      question: "What Microsoft Word feature lets you capture a portion of your screen to be used as an image in your document?",
      answers: [
        { text: "Screen Clipping", correct: true},
        { text: "Screen Grab", correct: false},
        { text: "Screen Capture", correct: false},
        { text: "none of these answers", correct: false},
      ]
    },
    {
      question: "When you crop an image in a document, what happens to the image and the overall document file size?",
      answers: [
        { text: "The cropped parts of the image are hidden and the overall file size increases.", correct: false},
        { text: "The cropped parts of the image are removed and the overall file size does not change.", correct: false},
        { text: "The cropped parts of the image are hidden and the overall file size does not change.", correct: true},
        { text: "The cropped parts of the image are removed and the overall file size decreases.", correct: false},
      ]
    },
    {
      question: "When you are typing in a paragraph and reach the end of the line, Word automatically starts a new line for you. What is this feature called?",
      answers: [
        { text: "line wrap", correct: false},
        { text: "word wrap", correct: true},
        { text: "a new line return", correct: false},
        { text: "a soft return", correct: false},
      ]
    },
    {
      question: "You want to create an organizational chart. Which SmartArt category should you choose?",
      answers: [
        { text: "Pyramid", correct: false},
        { text: "Relationship", correct: false},
        { text: "Hierarchy", correct: true},
        { text: "Matrix", correct: false},
      ]
    },
    {
      question: "When you insert page numbers, which position is **NOT** an option?",
      answers: [
        { text: "page margins", correct: false},
        { text: "insert", correct: true},
        { text: "current position", correct: false},
        { text: "bottom of page", correct: false},
      ]
    },
    {
      question: "How can you quickly move an insertion point up to the start of the previous paragraph?",
      answers: [
        { text: "Press Ctrl+Up Arrow (Windows) or Command+Up Arrow (Mac).", correct: true},
        { text: "Press Ctrl+Page Up (Windows) or Command+Page Up (Mac).", correct: false},
        { text: "Press Ctrl+Left Arrow (Windows) or Command+Left Arrow (Mac).", correct: false},
        { text: "Press Alt+Left Arrow (Windows) or Option+Left Arrow (Mac).", correct: false},
      ]
    },
    {
      question: "You send a document to two clients for review, and each client returns a separate, edited version of the document. How do you most efficiently review their feedback?",
      answers: [
        { text: "Click **Review > Accept**.", correct: false},
        { text: "Turn on **Track Changes**.", correct: false},
        { text: "Click **Review > Compare**.", correct: true},
        { text: "Click **Review > Smart Lookup**.", correct: false},
      ]
    },
    {
      question: "What is the difference between a footnote and an endnote?",
      answers: [
        { text: "Footnotes use Arabic numerals and endnotes use letters.", correct: false},
        { text: "A footnote is placed in the page footer, and an endnote is placed on a blank page at the end of the document.", correct: false},
        { text: "A footnote is placed at the bottom of the page, and an endnote is placed at the end of the document.", correct: true},
        { text: "An endnote always appears on the bottom of the same page that it references.", correct: false},
      ]
    },
    {
      question: "What Word building block uses headings to help users identify the contents of a document?",
      answers: [
        { text: "table of contents", correct: true},
        { text: "page break", correct: false},
        { text: "cover page", correct: false},
        { text: "index", correct: false},
      ]
    },
    {
      question: "You are coordinating the update of your company's 10-chapter operations manual. You begin by saving each chapter as a separate document. What Word feature can you use to manage all of these chapter do",
      answers: [
        { text: "the Organizer", correct: false},
        { text: "master document", correct: true},
        { text: "outline view", correct: false},
        { text: "versioning", correct: false},
      ]
    },
    {
      question: "Which is a benefit of using heading styles to format a report?",
      answers: [
        { text: "You can reformat all headings by changing style sets.", correct: false},
        { text: "You can navigate from heading to heading in the Navigation pane.", correct: false},
        { text: "all of these answers", correct: true},
        { text: "You can easily generate a table of contents.", correct: false},
      ]
    },
    {
      question: "You are typing text in two columns. When you reach the end of a paragraph in column 1, you want to start the next paragraph in column 1 on the next page. What type of break should you insert at this p",
      answers: [
        { text: "next page section break", correct: false},
        { text: "continuous section break", correct: false},
        { text: "column break", correct: false},
        { text: "page break", correct: true},
      ]
    },
    {
      question: "You want to capture all the content and design elements in your current document, so you can use them as a starting point when creating new documents. To do so, save the current document as **\_**.",
      answers: [
        { text: "a template file", correct: true},
        { text: "a PDF", correct: false},
        { text: "an OpenDocument Text file", correct: false},
        { text: "a Rich Text Format file", correct: false},
      ]
    },
    {
      question: "Which file format best preserves formatting and allows editing when a Word document is transferred to another application?",
      answers: [
        { text: "XML Paper Specification (XPS)", correct: false},
        { text: "OpenDocument Text (ODT)", correct: false},
        { text: "Rich Text Format (RTF)", correct: true},
        { text: "plain text (TXT)", correct: false},
      ]
    },
    {
      question: "How can you add a manual line break to a paragraph?",
      answers: [
        { text: "Press Enter twice (Windows) or Return twice (Mac).", correct: false},
        { text: "Press Alt+Enter (Windows) or Option+Return (Mac).", correct: false},
        { text: "Press Enter (Windows) or Return (Mac).", correct: false},
        { text: "Press Shift+Enter (Windows) or Shift+Return (Mac)", correct: true},
      ]
    },
    {
      question: "You want to repeat an element (such as the date) on all pages of the document. Which options should you choose?",
      answers: [
        { text: "Insert > Header & Footer", correct: true},
        { text: "Insert > Text", correct: false},
        { text: "Design > Header & Footer", correct: false},
        { text: "View > Header & Footer", correct: false},
      ]
    },
    {
      question: "You want to repeat an element (such as the date) at the bottom of all pages of a document. Which option should you choose?",
      answers: [
        { text: "Insert > Text", correct: false},
        { text: "View > Header & Footer", correct: false},
        { text: "Design > Footer", correct: false},
        { text: "Insert > Footer", correct: true},
      ]
    },
    {
      question: "A document has been shared with you from your colleague's OneDrive library. They have given only you editing access. What can you do with this document?",
      answers: [
        { text: "Share the document with others.", correct: true},
        { text: "Assume ownership of the document.", correct: false},
        { text: "Remove access from another user.", correct: false},
        { text: "Co-author the document with your colleague.", correct: false},
      ]
    },
    {
      question: "What formatting must you use to use both portrait and landscape pages in the same Word document?",
      answers: [
        { text: "templates", correct: false},
        { text: "page", correct: false},
        { text: "columns", correct: false},
        { text: "sections", correct: true},
      ]
    },
    {
      question: "Which option does the Find and Replace feature **NOT** support?",
      answers: [
        { text: "Match Punctuation", correct: true},
        { text: "Replace All", correct: false},
        { text: "Match Case", correct: false},
        { text: "Whole Word Only", correct: false},
      ]
    },
    {
      question: "What is the name of the text effect that displays a large capital letter at the beginning of a paragraph?",
      answers: [
        { text: "superscript", correct: false},
        { text: "drop cap", correct: true},
        { text: "subscript", correct: false},
        { text: "small caps", correct: false},
      ]
    },
    {
      question: "You need to document a procedure. Which paragraph format is best to help readers follow the sequence of instructions?",
      answers: [
        { text: "line numbers", correct: false},
        { text: "numbered list", correct: true},
        { text: "columns", correct: false},
        { text: "bulleted list", correct: false},
      ]
    },
    {
      question: "How can you adjust which data in a table is used when creating a chart?",
      answers: [
        { text: "Click the Select Data button.", correct: false},
        { text: "Click the Refresh Data button.", correct: false},
        { text: "Click the Switch Row/Column button.", correct: false},
        { text: "Click the Edit Data button.", correct: true},
      ]
    },
    {
      question: "Which object can you NOT insert into a Word document from the Insert tab?",
      answers: [
        { text: "a 3D model", correct: false},
        { text: "an equation", correct: false},
        { text: "a sketch", correct: true},
        { text: "a symbol", correct: false},
      ]
    },
    {
      question: "What chart type cannot be used for more than one data series?",
      answers: [
        { text: "Pie", correct: true},
        { text: "Column", correct: false},
        { text: "Line", correct: false},
        { text: "Bar", correct: false},
      ]
    },
    {
      question: "What is the difference between a footnote and an endnote?",
      answers: [
        { text: "An endnote always appears on the bottom of the same page that it references", correct: false},
        { text: "Footnote use Arabic numerals and endnotes use letters.", correct: false},
        { text: "A footnote is placed at the bottom of the page, and an endnote is placed at the end of the document", correct: true},
        { text: "A footnote is placed in teh page footer and an endnote is placed on a blank page at the end of the document", correct: false},
      ]
    },
    {
      question: "Which page orientation should you select to accommodate a wide chart or table?",
      answers: [
        { text: "Tall", correct: false},
        { text: "Portrait", correct: true},
        { text: "Wide", correct: false},
        { text: "Landscape", correct: false},
      ]
    },
    {
      question: "What is the first step in sharing a document that is currently saved on your local hard drive?",
      answers: [
        { text: "Get a sharing link for the document.", correct: false},
        { text: "Create a new document in OneDrive.", correct: false},
        { text: "Upload the document to OneDrive.", correct: true},
        { text: "Send an invitation to the document.", correct: false},
      ]
    },
    {
      question: "You are working in another application and want to move text into a Word document. How can you do it?",
      answers: [
        { text: "Export the text from the other application as a Word document.", correct: false},
        { text: "Use the Insert command and select the Word document.", correct: true},
        { text: "Select the text and save it as Word document.", correct: false},
        { text: "Use the Clipboard to copy and paste text into the Word document.", correct: false},
      ]
    },
    {
      question: "What is typically created as the first page of a document and contains information such as the document title and author?",
      answers: [
        { text: "cover page", correct: true},
        { text: "master page", correct: false},
        { text: "blank page", correct: false},
        { text: "table of contents page", correct: false},
      ]
    },
    {
      question: "After selecting the entire document, what is the quickest way to find out how many paragraphs there are in your current Word document?",
      answers: [
        { text: "From the start of the document, hold down the Ctrl (Windows) or Command (Mac) key, and press the Down Arrow key repeatedly, counting each paragraph as you go.", correct: false},
        { text: "Click File > Properties > Content to display file information, including the number of paragraphs.", correct: false},
        { text: "On the status bar, select Word Count to display file information, including the number of paragraphs.", correct: true},
        { text: "Click File > Info > Inspect Document to display file information, including the number of paragraphs.", correct: false},
      ]
    },
    {
      question: "You want to be able to read one page in your document while editing another page in the same document. What's the most efficient way to do this with only one monitor?",
      answers: [
        { text: "On the View tab of the ribbon, click Split.", correct: true},
        { text: "Save a duplicate copy of your document, then view both documents side by side.", correct: false},
        { text: "On the Insert tab of the ribbon, create a bookmark for the location that you want to read.", correct: false},
        { text: "On the View tab of the ribbon, click New Window.", correct: false},
      ]
    },
    {
      question: "What is the purpose of adding alternative text (alt text) to an image in your document?",
      answers: [
        { text: "Alt text improves accessibility in your document.", correct: false},
        { text: "all of these answers", correct: true},
        { text: "Alt text describes what appears in the image.", correct: false},
        { text: "Screen readers read the text aloud for users with visual impairments.", correct: false},
      ]
    },
    {
      question: "You want an image to move with the surrounding text as you make changes to the document. Which option should you select?",
      answers: [
        { text: "In Line with Text", correct: false},
        { text: "With Text Wrapping", correct: true},
        { text: "Behind Text", correct: false},
        { text: "Through", correct: false},
      ]
    },
    {
      question: "You want to place a triangle shape on your page. Where do you find the shape?",
      answers: [
        { text: "On the Insert tab, click SmartArt.", correct: false},
        { text: "On the Insert tab, click Shapes and look in the Rectangles & Triangles section.", correct: false},
        { text: "On the Insert tab, click Icons.", correct: false},
        { text: "On the Insert tab, click Shapes and look in the Basic Shapes section.", correct: true},
      ]
    },
    {
      question: "When printing multiple copies of a document, which option groups consecutive pages together, making them easier to distribute?",
      answers: [
        { text: "Collated", correct: true},
        { text: "Print One-Sided", correct: false},
        { text: "Uncollated", correct: false},
        { text: "Print on Both Sides", correct: false},
      ]
    },
    {
      question: "You are sharing your computer screen to collaborate on a document. Which view should you use to minimize the ribbon and give your document the most screen space?",
      answers: [
        { text: "Read Mode (Windows) or Focus (Mac)", correct: true},
        { text: "Draft view", correct: false},
        { text: "Web Layout view", correct: false},
        { text: "Outline view", correct: false},
      ]
    },
    {
      question: "You want a different header and footer to appear on alternating pages. Which option should you choose?",
      answers: [
        { text: "Different Odd & Even Pages", correct: true},
        { text: "Insert Alt Header/Footer", correct: false},
        { text: "Display on Odd Pages Only", correct: false},
        { text: "Different First Page", correct: false},
      ]
    },
    {
      question: "The form you are creating includes a field where users can either pick from a list of choices you provide, or type in a different entry. Which control type should you use?",
      answers: [
        { text: "SmartArt", correct: false},
        { text: "drop-down list", correct: false},
        { text: "combo box", correct: true},
        { text: "check box", correct: false},
      ]
    }
  ];
  
  function getRandomQuestions(numQuestions) {
    const questions = [];
    const allQuestionsCopy = [...allQuestions];
  
    for (let i = 0; i < numQuestions; i++) {
      const index = Math.floor(Math.random() * allQuestionsCopy.length);
      const question = allQuestionsCopy.splice(index, 1)[0];
      questions.push(question);
    }
  
    return questions;
  }
  
  let quiz = getRandomQuestions(5);
  let container = document.querySelector(".container");
  let questionEl = document.getElementById("question");
  let answerEl = document.getElementById("answers");
  let submitBtn = document.getElementById("submit");
  let scoreEl = document.getElementById("score");
  let resetBtn = document.createElement("button");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion(question) {
    questionEl.innerText = question.question;
  
    for (let i = 0; i < question.answers.length; i++) {
      const answer = question.answers[i];
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = answer.text;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(answer.text));
      answerEl.appendChild(label);
    }
  
    submitBtn.style.display = "block"; // Show submit button
  }
  
  function resetQuestion() {
    questionEl.innerText = "";
    answerEl.innerHTML = "";
  }
  
  function showScore() {
    let scoreText;
    let scoreColor;
    if (score < 3) {
      scoreText = "FAILED";
      scoreColor = "red";
    } else if (score < 5) {
      scoreText = "PASSED";
      scoreColor = "green";
    } else {
      scoreText = "PERFECT. CONGRATULATIONS!";
      scoreColor = "blue";
    }
    scoreEl.innerHTML = `Your score is <span style="font-size: 30px">${score}</span> out of <span style="font-size: 30px">${quiz.length}</span><br><br><span style="font-size: 50px"><span style="color: ${scoreColor}">${scoreText}</span></span>`;
    submitBtn.style.display = "none"; // Hide submit button
  
    resetBtn.innerText = "Reset";
    resetBtn.addEventListener("click", () => {
      resetQuiz();
    });
    container.appendChild(resetBtn);
  
    submitBtn.style.display = "none"; // Hide submit button
  }
  
  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    resetQuestion();
    quiz = getRandomQuestions(5);
    showQuestion(quiz[currentQuestion]);
    resetBtn.remove();
    scoreEl.innerText = "";
  }
  
  function submitAnswer() {
    const selected = answerEl.querySelector("input:checked");
    if (!selected) return;
  
    const answer = selected.value;
    const currentQuiz = quiz[currentQuestion];
  
    if (answer === currentQuiz.answers.find(a => a.correct).text) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion >= quiz.length) {
      resetQuestion();
      showScore();
    } else {
      resetQuestion();
      showQuestion(quiz[currentQuestion]);
    }
  }
  
  showQuestion(quiz[currentQuestion]);
  submitBtn.addEventListener("click", submitAnswer);
  