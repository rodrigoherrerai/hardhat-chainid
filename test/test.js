
const { ethers } = require("hardhat");



describe("Hardhat", () => {
    it("should return correct chain id", async () => {
        const _test = await ethers.getContractFactory("Test");
        const test = await _test.deploy();
        const chainId = await test.chain();

        console.log("chainId -->", chainId.toString());
    });
});
