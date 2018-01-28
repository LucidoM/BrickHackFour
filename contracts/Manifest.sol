pragma solidity ^0.4.17;

contract Manifest {
    address owner; 

    struct Video {
        address creator; 
        string title; 
        string ipfsLoc; 
    }

    Video[] reel; 

    function Manifest() public {
      owner = msg.sender;
    }

    function uploadVideo(string title, string ipfsLoc) public returns(uint count) {
        return reel.push(Video({
            creator: msg.sender, 
            title: title, 
            ipfsLoc: ipfsLoc
        })) - 1;
    }

    function all(uint pos) public constant returns(address id, string value, string time) { 
        assert(pos < reel.length);
        Video storage vid = reel[pos];
        return (vid.creator, vid.title, vid.ipfsLoc);
    } 

    function getCount() public constant returns(uint count) {
        return reel.length;
    }

    function() public payable {}
    
}