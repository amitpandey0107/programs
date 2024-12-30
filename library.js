function processInput(inputString, ab, ib, rb) {
    const parts = inputString.split(" ");
    const name = parts[0];
    const yearPublished = parseInt(parts[1]);
    let result;
    if (parts.length === 3) { // TYPE A
        const countOfBooks = parseInt(parts[2]);
        result = ab.update(name, yearPublished, countOfBooks);
    } else if (parts.length === 2) { // TYPE B
        result = ib.update(name, yearPublished);
    } else if (parts.length === 4) { // TYPE C
        const issueDate = parts[2];
        const returnDate = parts[3];
        result = rb.update(name, yearPublished, issueDate, returnDate);
    }
    return result
}

class Library {
    constructor() {
    }
    static books = []
    static findBook(name, yearPublished) {
        return this.books.find(book => book.name === name && book.yearPublished === yearPublished);
    }
}

class AddBook extends Library {
    constructor() {
        super()
    }
    update(name, yearPublished, countOfBooks) {
        let book = Library.findBook(name, yearPublished);
        if (book) {
            book.countOfBooks += countOfBooks;
        } else {
            book = { name, yearPublished, countOfBooks, countOfBooksIssued: 0 };
            Library.books.push(book);
        }
        return JSON.stringify(book);
    }
}



class IssueBook extends Library {
    constructor() {
        super()
    }
    update(name, yearPublished) {
        let book = Library.findBook(name, yearPublished);
        if (book && book.countOfBooks > book.countOfBooksIssued) {
            book.countOfBooksIssued += 1;
            return "true";
        } else {
            return "false";
        }
    }
}



class ReturnBook extends Library {
    constructor() {
        super()
    }
    update(name, yearPublished, issueDate, returnDate) {
        let book = Library.findBook(name, yearPublished);
        if (book && book.countOfBooksIssued > 0) {
            book.countOfBooksIssued -= 1;
            const issue = new Date(issueDate);
            const returnD = new Date(returnDate);
            const diffTime = Math.abs(returnD - issue);
            const overdueDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 30;
            let fine = 0;
            if (overdueDays > 0) {
                const weeksOverdue = Math.floor(overdueDays / 7);
                fine = Math.floor(overdueDays + Math.sqrt(weeksOverdue));
                if (overdueDays > 180) {
                    fine += 50;
                }
            }
            return fine.toString();
        } else {
            return "0";
        }
    }
}



// DEFAULT CODE
process.stdin.resume();
process.stdin.setEncoding('utf-8');
const fs = require("fs"); let inputString = '';
let currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const ws = fs.createWriteStream(process.env['OUTPUT_PATH']);
    const queries = parseInt(inputString[0], 10);
    const ab = new AddBook();
    const rb = new ReturnBook();
    const ib = new IssueBook();
    const library = new Library();
    let content = '';
    for (let i = 0; i < queries; i++) {
        const query = inputString[i + 1];
        content += processInput(query, ab, ib, rb);
        content += '\n';
    }

    ws.write(content);
    ws.end();
}