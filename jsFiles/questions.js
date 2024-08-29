
let questions = [
    {
        numb: 1,
        question: "What is Scarb?",
        answer: "Cairo's package manager and build system",
        option: [
            "Cairo code tester",
            "Cairo editor",
            "Cairo's package manager and build system",
            "Starknet build system"
        ]
    },
    {
        numb: 2,
        question: "What is the name of the initial function that a Cairo program runs?",
        answer: "main",
        option: [
            "mian",
            "function",
            "made",
            "main"
        ]
    },
    {
        numb: 3,
        question: "Which command will run the code in your project?",
        answer: "scarb cairo-run",
        option: [
            "scarb run",
            "scarb cairo-run",
            "run scarb",
            "scarb code-run"
        ]
    },
    {
        numb: 4,
        question: "Which syntax creates a variable that can be reassigned?",
        answer: "let mut x = 99",
        option: [
            "let y = 10",
            "const MINUTES_PER_HOUR = 60",
            "var j = 12",
            "let mut x = 99"
        ]
    },
    {
        numb: 5,
        question: "The keyword for declaring a new function in Cairo is:",
        answer: "fn",
        option: [
            "function",
            "func",
            "fn",
            "fn_"
        ]
    },
    {
        numb: 6,
        question: "In Cairo, a curly-brace block like `{ /* ... */ }` is:",
        answer: "An expression and A syntactic scope",
        option: [
            "An expression",
            "A syntactic scope",
            "A statement",
            "An expression and A syntactic scope"
        ]
    },
    {
        numb: 7,
        question: "cairo can be used to write provable programs",
        answer: "true",
        option: [
            "false",
            "true",
            "maybe",
            "who knows"
        ]
    },
    {
        numb: 8,
        question: "What is the syntax introducing a comment in cairo?",
        answer: "//",
        option: [
            "\\",
            "/-/",
            "//",
            "<>"
        ]
    },
    {
        numb: 9,
        question: "What happens in Cairo if an if condition evaluates to true?",
        answer: "The program executes the block of code associated with the if condition",
        option: [
            "The program terminates immediately.",
            "The program executes the block of code associated with the if condition",
            "The program skips the if block and executes the next block of code.",
            "nothing happens"
        ]
    },
    {
        numb: 10,
        question: "What is the result of running a Cairo program with an if statement where the condition evaluates to false and no else block is provided?",
        answer: "The program skips the if block and moves on to the next bit of code.",
        option: [
            "The program skips the if block and moves on to the next bit of code.",
            "The program panics.",
            "The program executes an implicit else block.",
            "The program stops execution."
        ]
    },
    {
        numb: 11,
        question: "What feature does Cairo provide for repeating code execution until a specified condition is met or gas runs out?",
        answer: "`loop` or `while` with a break condition.",
        option: [
            "Traditional `for` loops similar to those in imperative languages.",
            "Automated mechanisms that handle execution retries for you.",
            "`loop` or `while` with a break condition.",
            "repeat"
        ]
    },
    {
        numb: 12,
        question: "What is the file extension for Cairo source files?",
        answer: ".cairo",
        option: [
            ".cairo",
            ".ciarro",
            ".stark",
            ".cr"
        ]
    },
    {
        numb: 13,
        question: "What is the primary use of the Cairo programming language?",
        answer: "Smart contracts on StarkNet",
        option: [
            "Web development",
            "Mobile app development",
            "Smart contracts on StarkNet",
            "Data analysis"
        ]
    },
    {
        numb: 14,
        question: "Which of the following is a key feature of Cairo?",
        answer: "Zero-knowledge proofs",
        option: [
            "Functional programming",
            "Machine learning integration",
            "Zero-knowledge proofs",
            "Object-oriented programming"
        ]
    },
    {
        numb: 16,
        question: "Which platform primarily uses Cairo for its smart contracts?",
        answer: "StarkNet",
        option: [
            "Ethereum",
            "Solana",
            "StarkNet",
            "Bitcoin"
        ]
    },
    {
        numb: 17,
        question: "Which of the following is NOT a benefit of using modules?",
        answer: "Modules boost the runtime performance of interdependent code within the same module",
        option: [
            "Modules provide a scope to avoid naming conflicts across parts of a codebase",
            "Modules boost the runtime performance of interdependent code within the same module",
            "Modules encapsulate implementation details that shouldn't be used by external clients",
            "Modules group related code so programmers can more easily work on a large codebase"
        ]
    },
    {
        numb: 18,
        question: "What is the first word of an absolute path?",
        answer: "Package name",
        option: [
            "Package name",
            "Folder name",
            "Module name",
            "file name"
        ]
    },
    {
        numb: 19,
        question: "Which of the following statements best describes the function of the `use` keyword?",
        answer: "`use` reduces the verbosity of referring to items in the used path",
        option: [
            "`use` reduces the verbosity of referring to items in the used path",
            "`use` copies the contents of an item from one module to another",
            "`use` allows access to items that circumvents normal privacy rules",
            "`use` indicates to the compiler that an item will be used and should be optimized"
        ]
    },
    {
        numb: 20,
        question: "Which of the following is a Cairo data type?",
        answer: "felt",
        option: [
            "string",
            "int",
            "felt",
            "float"
        ]
    },
    {
        numb: 21,
        question: "What is the primary advantage of using Cairo for smart contracts?",
        answer: "Scalability",
        option: [
            "Simplicity",
            "Security",
            "Scalability",
            "Speed"
        ]
    },
    {
        numb: 22,
        question: "What is the keyword used to define a constant in Cairo?",
        answer: "const",
        option: [
            "constant",
            "const",
            "cnst",
            "let"
        ]
    },
    {
        numb: 23,
        question: "What is the primary use of the 'assert' statement in Cairo?",
        answer: "To check conditions",
        option: [
            "To import modules",
            "To declare variables",
            "To define functions",
            "To check conditions"
        ]
    },
    {
        numb: 24,
        question: "What is the primary benefit of using traits with generics in Cairo?",
        answer: "To ensure that generic types conform to certain behaviors",
        option: [
            "To ensure that generic types conform to several/different behaviors.",
            "To increase the execution speed of functions.",
            "To ensure that generic types conform to certain behaviors",
            "To automatically deploy smart contracts."
        ]
    },
    {
        numb: 25,
        question: "What is the significance of using generics in the context of Starknet contracts, as mentioned?",
        answer: "To reduce code duplication but may increase contract size",
        option: [
            "To reduce code duplication but may increase contract size",
            "To automatically deploy smart contracts.",
            "To ensure that generic types conform to certain behaviors",
            "To increase the execution speed of functions."
        ]
    },
    {
        numb: 26,
        question: "How can generics and traits together improve code quality in Cairo?",
        answer: "By allowing for more concise and flexible code that can work with multiple types.",
        option: [
            "Generics and traits have no impact on code quality.",
            "By eliminating the need for testing and verification of smart contracts.",
            "By automatically optimizing code for faster execution on the StarkNet.",
            "By allowing for more concise and flexible code that can work with multiple types."
        ]
    },
    {
        numb: 27,
        question: "How does the Cairo compiler handle generics at compile time?",
        answer: "By creating a new definition for each concrete type that replaces a generic type",
        option: [
            "By dynamically typing all variables",
            "By encrypting the generic types",
            "By creating a new definition for each concrete type that replaces a generic type",
            "By ignoring them for performance reasons"
        ]
    },
    {
        numb: 28,
        question: "What is the tool for effectively handling the duplication of concepts in cairo?",
        answer: "Generics",
        option: [
            "duplication handler",
            "Genaric",
            "structs",
            "Generics"
        ]
    },
    {
        numb: 29,
        question:  "For an element of type T to be comparable, what trait must it implement?",
        answer: "PartialOrd trait",
        option: [
            "Copy trait",
            "Drop trait",
            "Print trait",
            "PartialOrd trait"
        ]
    },
    {
        numb: 30,
        question:  "What is the purpose of generic data types in Cairo?",
        answer: "To allow for the creation of data structures that can operate on any data type.",
        option: [
            "To simplify the syntax of the Cairo programming language.",
            "To allow for the creation of data structures that can operate on any data type.",
            "To increase the runtime speed of programs.",
            "To restrict the data types that can be used in a program.",
        ]
    },
    {
        numb: 31,
        question:  "What is the purpose of using generics in Cairo functions?",
        answer: "To enable functions to operate on different data types without needing multiple, type-specific implementations",
        option: [
            "To allow functions to operate only on specific types defined at compile time.",
            "To restrict the usage of functions to scalar types only.",
            "To enable functions to operate on different data types without needing multiple, type-specific implementations",
            "To increase the compilation time by adding complexity to the function definitions."
        ]
    },
    {
        numb: 32,
        question: "Which trait must a type implement to be used as a value in a Felt252Dict<T>?",
        answer: "Felt252DictValue<T>",
        option: [
            "Copy<T>",
            "Felt252DictValue<T>",
            "UserDatabaseTrait<T>",
            "Print<T>"
        ]
    },
    {
        numb: 33,
        question: "What do generics in Cairo allow a programmer to do?",
        answer: "Replace specific types with placeholders to reduce code duplication.",
        option: [
            "Increase the speed of program compilation.",
            "Replace specific types with placeholders to reduce code duplication.",
            "Directly interact with the Cairo VM.",
            "Automatically optimize smart contracts for gas efficiency."
        ]
    },
    {
        numb: 34,
        question: "When are concrete types for generics determined in Cairo?",
        answer: "At compile time, creating a new definition for each concrete type.",
        option: [
            "At runtime when the smart contract is executed.",
            "At compile time, creating a new definition for each concrete type.",
            "After deploying the smart contract to the StarkNet.",
            "Generics remain abstract and are never given concrete types."
        ]
    },
    {
        numb: 35,
        question: "What is the primary benefit of using traits with generics in Cairo?",
        answer:  "To ensure that generic types conform to certain behaviors.",
        option: [
            "To increase the execution speed of functions.",
            "To ensure that generic types conform to certain behaviors.",
            "To reduce the gas cost of transactions on StarkNet.",
            "To automatically deploy smart contracts."
        ]
    },
    {
        numb: 36,
        question: "How can you pass a variable to a function in Cairo while keeping ownership and allowing it to be mutated?",
        answer: "Pass it as a mutable reference with `ref`." ,
        option: [
            "Pass it by-value.",
            "Pass it as a mutable reference with `ref`.",
            "Pass it as a snapshot with `@`.",
            "Pass it by-reference."
        ]
    },
    {
        numb: 37,
        question: "How can you pass a variable to a function in Cairo while keeping ownership and ensuring it won't be mutated?",
        answer: "Pass it as a snapshot with `@`.",
        option: [
            "Pass it by-value.",
            "Pass it as a mutable reference with `ref`.",
            "Pass it as a snapshot with `@`.",
            "Pass it by-reference."
        ]
    },
    {
        numb: 38,
        question: "What happens to the ownership of a variable when it is passed by-value to a function in Cairo?",
        answer: "Ownership of the variable is transferred to the function.",
        option: [
            "Ownership of the variable remains with the caller.",
            "The variable becomes immutable.",
            "Ownership of the variable is transferred to the function.",
            "The variable is duplicated."
        ]
    },
    {
        numb: 39,
        question: "Which of the following statements is true about passing variables in Cairo?",
        answer: "Passing by-value transfers ownership of the variable to the function.",
        option: [
            "Passing by-value transfers ownership of the variable to the function.",
            "Passing by-snapshot transfers ownership of the variable to the function.",
            "Passing by-reference transfers ownership of the variable to the function.",
            "Passing by-value keeps the ownership of the variable with the caller."
        ]
    },
    {
        numb: 40,
        question: "What does it mean for a variable to have one owner in Cairo?",
        answer: "It means that only one part of the code can modify the variable at any given time.",
        option: [
            "It means that the variable can be accessed by multiple parts of the code simultaneously.",
            "It means that the variable is immutable.",
            "It means that only one part of the code can modify the variable at any given time.",
            "It means that the variable can only be used within a single function."
        ]
    },
]