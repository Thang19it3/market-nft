pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    mapping(uint => Product) public products;

    struct Product {
        uint id;
        string name;
        uint price;
        string img;
        uint pk;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        string img,
        uint pk,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        string img,
        uint pk,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "ETH Marketplace";
    }

    function createProduct(string memory _name, uint _price, string memory _img, uint _pk) public {
        
        require(bytes(_name).length > 0);
        require(bytes(_img).length > 0);
        
        require(_price > 0);
        // Increment product count
        productCount ++;
        // Create the product
        products[productCount] = Product(productCount, _name, _price, _img, _pk, msg.sender, false);
        // Kích hoạt một sự kiện
        emit ProductCreated(productCount, _name, _price, _img, _pk, msg.sender, false);
    }

    function purchaseProduct(uint _id) public payable {
        // Fetch the product
        Product memory _product = products[_id];
        // Fetch the owner
        address payable _seller = _product.owner;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        require(msg.value >= _product.price);
        // Yêu cầu sản phẩm chưa được mua
        require(!_product.purchased);
        // Yêu cầu người mua không phải là người bán
        require(_seller != msg.sender);
        // Chuyển quyền sở hữu cho người mua
        _product.owner = msg.sender;
        // Đánh dấu là đã mua
        _product.purchased = true;
        // Update the product
        products[_id] = _product;
        // Thanh toán cho người bán bằng cách gửi Ether cho họ
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased(productCount, _product.name, _product.price, _product.img, _product.pk, msg.sender, true);
    }
}
