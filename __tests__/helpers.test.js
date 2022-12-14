test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});

const { format_date } = require("../utils/helpers");

test("format_plural() adds an s to plural items and doesn't affect singular items", () => {
  const plural_item = format_plural("Tiger", 2)
  const singular_item = format_plural("Lion", 1)
    
  expect(plural_item).toBe("Tigers");
  expect(singular_item).toBe("Lion");
});


const { format_plural } = require("../utils/helpers");

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
  });

  const { format_url } = require("../utils/helpers");