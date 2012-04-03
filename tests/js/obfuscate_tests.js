
$(document).ready(function(){

  test("test revealing an email address", 2, function() {
    $('.show').revealEmail()
    equal( $('.show').first().attr('href'), 'mailto:dperrymorrow@google.com');
    notEqual( $('.show').first().text(), 'mailto:dperrymorrow@google.com');
  });

  test("test revealing an email address and label", 2, function() {
    $('.labelAlso').revealEmail(true)
    equal( $('.labelAlso').first().attr('href'), 'mailto:dperrymorrow@google.com');
    equal( $('.labelAlso').first().text(), 'dperrymorrow@google.com');
  });

});

