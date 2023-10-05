// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Finance {
    struct Game {
        string name;
        uint id;
        address owner;
        bool concluded;
        address[] participants;
        uint scorePerQuestion;
    }

    struct Question {
        string quest;
        string[] options;
        uint answer;
        address[] alreadyAnswer;
    }

    struct User {
        address addr;
        uint score;
    }

    uint private ids = 0;
    uint private userIds = 0;
    mapping(uint => Question[]) public questions;
    mapping(uint => User[]) gameUsers;
    mapping(address => mapping(uint => uint)) userId;

    Game[] public games;

    address public contractOwner;

    modifier onlyGameOwner(uint _gameId) {
        require(
            msg.sender == games[_gameId].owner,
            "You should be the game creator to call this function!"
        );
        _;
    }

    modifier onlyOwner() {
        require(
            msg.sender == contractOwner,
            "You should be the owner of this contract to call this function!"
        );
        _;
    }

    constructor() {
        contractOwner = msg.sender;
    }

    function createGame(string memory _name, uint _scorePerQuestion) public {
        Game memory newGame = Game({
            name: _name,
            id: ids,
            owner: msg.sender,
            concluded: false,
            participants: new address[](0),
            scorePerQuestion: _scorePerQuestion
        });

        games.push(newGame);
        ids = ids + 1;
    }

    function getGames() public view returns (Game[] memory) {
        return games;
    }

    function addQuestion(
        uint _gameId,
        string memory _question,
        uint _answer,
        string[] memory _alternatives
    ) public onlyGameOwner(_gameId) {
        require(!games[_gameId].concluded, "This game is concluded");
        Question memory newQuestion = Question({
            quest: _question,
            options: _alternatives,
            answer: _answer,
            alreadyAnswer: new address[](0)
        });
        questions[_gameId].push(newQuestion);
    }

    function enterGame(uint _gameId) public {
        require(!games[_gameId].concluded, "This game is concluded");
        User memory newUser = User({addr: msg.sender, score: 0});
        userId[msg.sender][_gameId] = gameUsers[_gameId].length;
        gameUsers[_gameId].push(newUser);
        games[_gameId].participants.push(msg.sender);
    }

    function getParticipants(
        uint _gameId
    ) public view returns (User[] memory, address[] memory) {
        return (gameUsers[_gameId], games[_gameId].participants);
    }

    function answerQuestion(
        uint _gameId,
        uint _questionNumber,
        uint _answer
    ) public returns (string memory) {
        require(!games[_gameId].concluded, "This game is concluded");

        bool already = false;
        bool inTheGame = false;

        for (uint i = 0; i > games[_gameId].participants.length; i++) {
            if (msg.sender == games[_gameId].participants[i]) {
                inTheGame = true;
            }
        }

        require(inTheGame, "You are not in the Game");

        for (
            uint i = 0;
            i > questions[_gameId][_questionNumber].alreadyAnswer.length;
            i++
        ) {
            if (
                msg.sender ==
                questions[_gameId][_questionNumber].alreadyAnswer[i]
            ) {
                already = true;
            }
        }
        require(already != true, "You already answered this question!");

        questions[_gameId][_questionNumber].alreadyAnswer.push(msg.sender);

        uint id = userId[msg.sender][_gameId];
        if (_answer == questions[_gameId][_questionNumber].answer) {
            gameUsers[_gameId][id].score =
                gameUsers[_gameId][id].score +
                games[_gameId].scorePerQuestion;
            return "You're right! The score was added to your profile";
        } else {
            return "You're wrong :( No score added to profile";
        }
    }

    function finalizeGame(uint _gameId) public onlyGameOwner(_gameId) {
        games[_gameId].concluded = true;
    }
}
