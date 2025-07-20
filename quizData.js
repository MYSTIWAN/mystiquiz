const quizData = [
  {
    question: "What is management primarily concerned with?",
    options: ["Setting long-term goals", "Getting things done through others", "Marketing strategies", "Financial forecasting"],
    answer: 1,
    explanation: "Management is about coordinating people and resources to accomplish objectives efficiently."
  },
  {
    question: "Who defined management as planning, organizing, actuating, and controlling?",
    options: ["Fayol", "Daft", "Terry & Franklin", "Taylor"],
    answer: 2,
    explanation: "Terry and Franklin emphasized these four classical functions in their definition."
  },
  {
    question: "What distinguishes Daft’s definition of management?",
    options: ["Focus on productivity", "Focus on policy formulation", "Efficiency and effectiveness", "Coordination of stakeholders"],
    answer: 2,
    explanation: "Daft highlights that management should be both effective and efficient."
  },
  {
    question: "How many functions did Henri Fayol identify?",
    options: ["4", "5", "3", "6"],
    answer: 1,
    explanation: "Fayol’s functions: planning, organizing, commanding, coordinating, and controlling."
  },
  {
    question: "What does optimization mean in management?",
    options: ["Using minimum resources for maximum output", "Focusing only on profits", "Strategizing for marketing", "Reducing staff"],
    answer: 0,
    explanation: "Optimization means getting the best output using limited inputs."
  },


  // ✅ Continue adding questions in the same format...
  // You’ll eventually have all 40 questions here.
  {
    question: "Management is required in:",
    options: ["Only corporations", "Profit organizations only", "All types of organizations", "Only government agencies"],
    answer: 2,
    explanation: "Management applies universally—across businesses, nonprofits, families, and institutions."
  },
  {
    question: "Who emphasized management as knowing what is to be done and ensuring it’s done well?",
    options: ["F.W. Taylor", "Henri Fayol", "George Terry", "Peter Drucker"],
    answer: 0,
    explanation: "Taylor described management as an art focused on execution."
  },
  {
    question: "Which thinker defined management as coordinating and overseeing work activities?",
    options: ["Mintzberg", "Robbins & Coulter", "Bartol & Martin", "Terry & Franklin"],
    answer: 1,
    explanation: "Robbins and Coulter emphasized effectiveness and oversight."
  },
  {
    question: "Effectiveness is best described as:",
    options: ["Using minimal resources", "Completing activities that achieve goals", "Optimizing time", "Improving efficiency"],
    answer: 1,
    explanation: "Effectiveness means doing the right things to reach objectives."
  },
  {
    question: "Efficiency focuses on:",
    options: ["Customer satisfaction", "Resource usage", "Company growth", "Employee turnover"],
    answer: 1,
    explanation: "Efficiency is about minimizing inputs for maximum outputs."
  },
  {
    question: "Peter Drucker defined efficiency as:",
    options: ["Doing the right things", "Making profits", "Doing things right", "Optimizing performance"],
    answer: 2,
    explanation: "Drucker described efficiency as excellence in execution."
  },
  {
    question: "What does the term 'ends' relate to in management?",
    options: ["Efficiency", "Resources", "Effectiveness", "Processes"],
    answer: 2,
    explanation: "Ends represent effectiveness—goal achievement and outcomes."
  },
  {
    question: "Which of these is NOT a feature of management?",
    options: ["Goal-oriented", "Intangible", "Dynamic", "Static"],
    answer: 3,
    explanation: "Management adapts to change; it is not static."
  },
  {
    question: "Which objective is NOT typically part of management’s aims?",
    options: ["Social welfare", "Human welfare", "Maximizing profit only", "Managerial development"],
    answer: 2,
    explanation: "Management goals go beyond profit to include welfare and growth."
  },
  {
    question: "Who views administration as above management?",
    options: ["British authors", "Chester Bernard", "Oliver Sheldon", "Robbins & Coulter"],
    answer: 2,
    explanation: "Sheldon and other American theorists regard administration as higher-level policy setting."
  },
  {
    question: "According to the American view, what does administration handle?",
    options: ["Production supervision", "Policy determination", "Employee hiring", "Sales analytics"],
    answer: 1,
    explanation: "Administration is responsible for setting policies and goals."
  },
  {
    question: "British theorists view management as:",
    options: ["A subset of administration", "Above administration", "The same as administration", "Limited to operations"],
    answer: 1,
    explanation: "They describe management as the broad process encompassing planning and regulation."
  },
  {
    question: "Which authors believe management and administration are the same?",
    options: ["Oliver Sheldon", "Breech", "Bernard & Terry", "McFarland"],
    answer: 2,
    explanation: "Bernard, Terry, and O'Donnell equate the two, differing only by context."
  },
  {
    question: "Administrative tasks are performed mostly by:",
    options: ["Middle-level managers", "First-line supervisors", "Top-level managers", "External consultants"],
    answer: 2,
    explanation: "Top managers focus on long-term policies and external coordination."
  },
  {
    question: "Who serves as a link between top and lower management?",
    options: ["CEO", "Department Head", "Supervisor", "Board of Directors"],
    answer: 1,
    explanation: "Middle managers communicate and translate policy down to operational levels."
  },
  {
    question: "Administration is primarily responsible for:",
    options: ["Executing tasks", "Setting policies and goals", "Supervising employees", "Managing customer relations"],
    answer: 1,
    explanation: "Administration focuses on high-level planning and policy formulation."
  },
  {
    question: "Management operates within limits set by:",
    options: ["Employees", "Shareholders", "Administration", "Customers"],
    answer: 2,
    explanation: "Management executes tasks based on administrative guidelines."
  },
  {
    question: "Which level of management is responsible for overall organizational strategy?",
    options: ["Middle-level", "Top-level", "Lower-level", "Operational staff"],
    answer: 1,
    explanation: "Top managers handle strategic planning and external alignment."
  },
  {
    question: "Middle managers typically:",
    options: ["Set company-wide policies", "Supervise frontline staff", "Manage departments", "Handle customer complaints"],
    answer: 2,
    explanation: "They oversee departments and translate strategy into operations."
  },
  {
    question: "First-line managers are also known as:",
    options: ["Executives", "Supervisors", "Directors", "Vice Presidents"],
    answer: 1,
    explanation: "They directly manage non-managerial employees."
  },
  {
    question: "Which function is emphasized most by top management?",
    options: ["Leading", "Controlling", "Planning", "Technical supervision"],
    answer: 2,
    explanation: "Top managers focus on long-term planning and strategy."
  },
  {
    question: "Which function is common across all management levels?",
    options: ["Planning", "Controlling", "Leading", "Organizing"],
    answer: 1,
    explanation: "Controlling ensures performance aligns with goals at every level."
  },
  {
    question: "Who identified managerial roles into three categories?",
    options: ["Peter Drucker", "Henri Fayol", "Henry Mintzberg", "Oliver Sheldon"],
    answer: 2,
    explanation: "Mintzberg grouped roles into interpersonal, informational, and decisional."
  },
  {
    question: "Which is NOT an interpersonal role?",
    options: ["Figurehead", "Leader", "Liaison", "Monitor"],
    answer: 3,
    explanation: "Monitor is part of informational roles."
  },
  {
    question: "Informational roles involve:",
    options: ["Decision-making", "Relationship building", "Data collection and sharing", "Conflict resolution"],
    answer: 2,
    explanation: "Managers gather and distribute information to support decisions."
  },
  {
    question: "Decisional roles include:",
    options: ["Spokesperson", "Negotiator", "Monitor", "Liaison"],
    answer: 1,
    explanation: "Negotiator is one of Mintzberg’s decisional roles."
  },
  {
    question: "Which role involves resolving unexpected issues?",
    options: ["Entrepreneur", "Disturbance handler", "Resource allocator", "Figurehead"],
    answer: 1,
    explanation: "Disturbance handler deals with crises and disruptions."
  },
  {
    question: "Conceptual skills are most important for:",
    options: ["Supervisors", "Middle managers", "Top managers", "Technicians"],
    answer: 2,
    explanation: "Top managers need to see the big picture and strategize accordingly."
  },
  {
    question: "Human skills are important at:",
    options: ["Top level only", "Middle level only", "All levels", "Operational level only"],
    answer: 2,
    explanation: "Managers at all levels interact with people and need strong human skills."
  },
  {
    question: "Technical skills are most critical for:",
    options: ["Top managers", "Middle managers", "First-line managers", "Board members"],
    answer: 2,
    explanation: "Frontline managers use technical skills to guide and support employees."
  },
  {
    question: "Which skill helps managers understand how parts of the organization fit together?",
    options: ["Technical", "Human", "Conceptual", "Mechanical"],
    answer: 2,
    explanation: "Conceptual skills allow managers to analyze and integrate systems."
  },
  {
    question: "Human skills include:",
    options: ["Coding and debugging", "Conflict management and persuasion", "Financial modeling", "Server configuration"],
    answer: 1,
    explanation: "Human skills involve communication, leadership, and empathy."
  },
  {
    question: "Technical skills involve:",
    options: ["Strategic planning", "Policy formulation", "Using tools and procedures", "Team building"],
    answer: 2,
    explanation: "They help managers perform specific tasks using specialized knowledge."
  },
  {
    question: "Call center managers need technical skills to:",
    options: ["Motivate staff", "Monitor calls and give feedback", "Set company goals", "Negotiate contracts"],
    answer: 1,
    explanation: "They use technical expertise to evaluate and improve employee performance."
  },
  {
    question: "As managers move up the hierarchy:",
    options: ["Human skills become less important", "Technical skills become more important", "Conceptual skills become more important", "They stop managing people"],
    answer: 2,
    explanation: "Higher-level managers rely more on conceptual thinking than technical execution."
  }

];