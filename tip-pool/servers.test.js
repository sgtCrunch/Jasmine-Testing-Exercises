describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should clear the input for server name', function () {
    submitServerInfo();

    expect(serverNameInput.value).toEqual('');
  });

  it('should create keys in allServers that contain the word \'server\'', function () {
    submitServerInfo();

    expect(Object.keys(allServers).every((val) => val.includes('server'))).toEqual(true);
  });

  it('should clear the table if allServers is empty', function () {
    updateServerTable();

    expect(serverTbody.innerHTML).toEqual('');
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverNameInput.value = '';
    updateServerTable();
    
  });
  
});

