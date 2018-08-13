describe("Gilded Rose", function() {

  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

  it ('should degrade twice as fast if item is conjured', function() {
    const gildedRose = new Shop([ new Item('cool pants', 10, 30), new conjuredItem('knockoff pants', 10, 30, true)]);
    const items = gildedRose.updateQuality();
    expect(items[1].quality).toBeLessThan(items[0].quality);
  })

});
