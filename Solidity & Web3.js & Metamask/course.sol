pragma solidity ^0.4.18;

contract Owned {
    address owner = msg.sender;
    
    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }
}

contract Courses is Owned {
    
    struct Instructor {
        uint age;
        bytes32 fName;
        bytes32 lName;
    }
    
    mapping (address => Instructor) instructors;
    address[] public InstructorAccts;
    
    event instructorInfo (
        bytes32 fName,
        bytes32 lName,
        uint age
    );
    
    function setInstructor(address _address, uint _age, bytes32 _fName, bytes32 _lName) onlyOwner public {
        Instructor storage instructor = instructors[_address];
        
        instructor.age = _age;
        instructor.fName = _fName;
        instructor.lName = _lName;
        
        InstructorAccts.push(_address) -1;
        emit instructorInfo(_fName, _lName, _age);
    }
    
    function getInstructors() view public returns(address[]) {
        return InstructorAccts;
    }
    
    function getInstructor(address _address) view public returns(uint, bytes32, bytes32) {
        return (instructors[_address].age, instructors[_address].fName, instructors[_address].lName);
    }
    
    function countinstructors() view public returns(uint) {
        return InstructorAccts.length;
    }
}