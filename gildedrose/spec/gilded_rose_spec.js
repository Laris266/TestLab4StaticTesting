describe("Gilded Rose", function() {

 /*  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("fixme");
  }); */
  //ai support let ai double check tests and suggest missing tests
  //testing legacy code
  it("normal item decreases quality and sellIn by 1", () =>
  {
    const item = new Item("+5 Dexterity Vest", 10, 20);

    items = [item];
    update_quality();

    expect(item.sell_in).toBe(9);
    expect(item.quality).toBe(19);
  });

  it("if sell by date has passed, quality degrades twice as fast", () => {
    const item = new Item("+5 Dexterity Vest", 0, 20);

    items = [item];
    update_quality();

    expect(item.sell_in).toBe(-1);
    expect(item.quality).toBe(18);
  });

  it("Aged Brie increases in quality the older it gets", () => {
    const item = new Item("Aged Brie", 2, 0);

    items = [item];
    update_quality();

    expect(item.sell_in).toBe(1);
    expect(item.quality).toBe(1);
  });

  it("Sulfuras never has to be sold or decreases in quality", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 0, 80);

    items = [item];
    update_quality();

    expect(item.sell_in).toBe(0);
    expect(item.quality).toBe(80);
  });

  it("quality is never negative", () => {
    const item = new Item("+5 Dexterity Vest", 10, 0);

    items = [item];
    update_quality();

    expect(item.quality).toBe(0);
  });

  it("quality is never more than 50", () => {
    const item = new Item("Aged Brie", 2, 50);  

    items = [item];
    update_quality();

    expect(item.quality).toBe(50);
  });

  it("Backstage passes increases in quality by 1 when sellIn > 10", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);

    items = [item];
    update_quality();

    
    expect(item.quality).toBe(21);
  });

  it("Backstage passes increases in quality by 2 when sellIn <= 10", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20);

    items = [item];
    update_quality();

    expect(item.quality).toBe(22);
  });

  it("Backstage passes increases in quality by 3 when sellIn <= 5", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20);

    items = [item];

    update_quality();

    expect(item.quality).toBe(23);
  });
 // this was ai suggested test
  it("Backstage passes quality never exceeds 50", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49);

    items = [item];
    update_quality();

    expect(item.quality).toBe(50);
  });

  it("Backstage passes quality drops to 0 after the concert", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);

    items = [item];
    update_quality();

    expect(item.quality).toBe(0);
  });

  //new feature conjured items
  it("Conjured items degrade in quality twice as fast as normal items", () => {
    const item = new Item("Conjured Mana Cake", 3, 6);  

    items = [item];
    update_quality();

    expect(item.sell_in).toBe(2);
    expect(item.quality).toBe(4);
  });



});
