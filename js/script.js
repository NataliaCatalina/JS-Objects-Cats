$(document).ready(function(){

  // declaration of an object
  // var cat = {
  //     id : 101,
  //     name : 'Furry',
  //     color : 'brown',
  //     breed : 'Siamese',
  //     behaviour : 'agressive'
  //
  // };
  //
  // console.log(cat);
  // $('#result').html('<h1>' + cat + '</h1>');

  // $('#result').html('<br>' + cat.name)
  //             .append('<br>' + cat.breed)
  //             .append('<br>' + cat.color);

// array of objects

var cats = [
      {
        id : 101,
        name : 'Blue',
        color : 'combined',
        breed : 'Siamese',
        behaviour : 'agressive',
        photo : 'siamese.jpg'
      },
      {
        id : 102,
        name : 'Furry',
        color : 'white',
        breed : 'Siamese',
        behaviour : 'agressive',
        photo : 'siamese01.jpeg'
      },
      {
        id : 103,
        name : 'Gin',
        color : 'white',
        breed : 'Siamese',
        behaviour : 'agressive',
        photo : 'siamese02.jpeg'
      },
      {
        id : 104,
        name : 'Furryus',
        color : 'white',
        breed : 'Siamese',
        behaviour : 'agressive',
        photo : 'siamese03.jpeg'
      },
      {
        id : 105,
        name : 'mama',
        color : 'Grey',
        breed : 'Siamese',
        behaviour : 'agressive',
        photo : 'siamese04.jpeg'
      },
      {
        id : 109,
        name : 'Frank',
        color : 'Brown',
        breed : 'Abyssinian',
        behaviour : 'Lazy',
        photo : 'abyssinian.jpg'
      },
      {
        id : 106,
        name : 'Pam',
        color : 'Grey',
        breed : 'Persian',
        behaviour : 'loyal',
        photo : 'persian.jpg'
      },
      {
        id : 107,
        name : 'Flu',
        color : 'White',
        breed : 'Balinese',
        behaviour : 'cute',
        photo : 'balinese.jpg'
      },
      {
        id : 108,
        name : 'Simon',
        color : 'Brown',
        breed : 'Burmese',
        behaviour : 'happy',
        photo : 'burmesehed.png'
      }

];
//access properties of objects using index number
// $('#result').html('<br>' + cats[0].name)
//             .append('<br>' + cats[0].breed)
//             .append('<br>' + cats[0].color)
//             .append('<br>'+ '<br>' + cats[1].name)
//             .append('<br>' + cats[1].breed)
//             .append('<br>' + cats[1].color);


var i=0;
for (i = 0; i <cats.length; i++){

//own style
  // $('#result').append('<div class="row clearfix border border-danger m-2 p-2">' +
  //
  //                     '<div class="col-md-6">' +
  //                       '<h1>' + cats[i].name +   '</h1>' +
  //                       '<h2>' + cats[i].breed + '</h2>' +
  //                        '<h3>' + cats[i].color + '</h3>' +
  //                        '<h5>' + cats[i].behaviour + '</h5>' +
  //
  //                     '</div>' +
  //
  //                     '<div class="col-md-6">' +
  //                       '<img src="images/' + cats[i].photo + '" alt=" ' + cats[i].breed + '" class="img-thumbnail" > ' +
  //                     '</div>' +
  //
  //                     '</div>'
  // ); //append ends here
    $('#result').append( '<div class="col-md-4 mb-2">' +
                          '<div class="card text-danger" style="width: 18rem;">' +
                             '<img src="images/' + cats[i].photo + '" class="card-img-top" alt="' + cats[i].breed + '">' +
                             '<div class="card-body">' +
                              '<h5 class="card-title">'+ cats[i].breed + '</h5>' +
                              '<p class="card-text">' + cats[i].name + '<br>' + cats[i].color + '<br>' + cats[i].behaviour +
                              '</p>' +
                              '<button id="' + cats[i].id + '" type="button" class="btn btn-primary moreDetails" data-toggle="modal" data-target="#exampleModal">More'+ " " + cats[i].breed + '</button>' +
                            '</div>' +
                          '</div>' +
                      '</div>'
                  ); //append ends here
} //end of for loop



$('.moreDetails').click(function(){
  $('#imageCat').text(' '); //clearing the content
  console.log(this.id);
  var i=0;
  for (i = 0; i < cats.length; i++) {
    if (parseInt(this.id) === cats[i].id) {
      console.log(cats[i].id, cats[i].name, cats[i].breed);
        $('#exampleModalLabel').text(cats[i].breed);
        //append will keep  adding to existing content, so clear if you want
        //or else use html to replace existing content
        $('#imageCat').append('<img class="img-fluid" src="images/' + cats[i].photo + '" alt="' + cats[i].breed + '"/>');

        } //end of if statement
      }//end of for statement
}); // end of moreDetails click event


}); //document.ready()
