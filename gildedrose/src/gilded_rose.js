function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {

  for(var i = 0; i < items.length; i++) {
    updateItem(items[i]);
  }
  //old code
 /*  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          if(items[i].name.includes('Conjured') ) {
            items[i].quality = items[i].quality - 2
          }
          else {
            items[i].quality = items[i].quality - 1
          }
          
        }
        
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              if(items[i].name.includes('Conjured') ) {
                items[i].quality = items[i].quality - 2
              }
              else {
                items[i].quality = items[i].quality - 1
              }
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  } */
}

function updateItem(item) {
  updateQuality(item);
  updateSellIn(item);
  updateAfterSellIn(item);
}

function updateSellIn(item) {
  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.sell_in = item.sell_in - 1;
  }
}

function updateQuality(item) {
  if(item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }
  if(item.name === "Aged Brie") {
    increaseQuality(item, 1);
    return;
  }
  if(item.name === "Backstage passes to a TAFKAL80ETC concert") {
    increaseQuality(item, 1);
    if(item.sell_in <= 10) {
      increaseQuality(item, 1);
    }
    if(item.sell_in <= 5) {
      increaseQuality(item, 1);
    }
    return;
  }

  let decrease = item.name.includes("Conjured") ? 2 : 1;
  decreaseQuality(item, decrease);
}

function increaseQuality(item, amount) {
  item.quality = Math.min(item.quality + amount, 50);
}

function decreaseQuality(item, amount) {
  item.quality = Math.max(item.quality - amount, 0);
}

function updateAfterSellIn(item) {
  if(item.sell_in >= 0) {
    return;
  }
  if(item.name === "Aged Brie") {
    increaseQuality(item, 1);
    return;
  }

  if(item.name === "Backstage passes to a TAFKAL80ETC concert") {
    item.quality = 0;
    return;
  } 

  if(item.name.includes("Conjured")) {
    decreaseQuality(item, 2);
  }

  if(item.name !== "Sulfuras, Hand of Ragnaros") {
    decreaseQuality(item, 1);
  }
}
