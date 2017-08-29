(function(){
    $(function(){

        function initial(){
            $.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f20d37bc05367a3e06a9d0b76343bb96&hash=84bbda2fd94e90465e2b53c53e9838bc",
                function(charData){
                    let characters = charData.data.results
                    for(let i = 0; i < characters.length; i++){
                      $("#charTable").append(characters[i].name)
                      $("#charTable").append("<img src='"+characters[i].thumbnail.path+"/standard_fantastic."+characters[i].thumbnail.extension+"' height=100px />")
                    }
                })
        }


        initial()

        function searchAPI(text){
            $.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f20d37bc05367a3e06a9d0b76343bb96&hash=84bbda2fd94e90465e2b53c53e9838bc&nameStartsWith="+text,
                function(charData){
                    let characters = charData.data.results
                    for(let i = 0; i < characters.length; i++){
                        $("#charTable").append(characters[i].name)
                        $("#charTable").append("<img src='"+characters[i].thumbnail.path+"/standard_fantastic."+characters[i].thumbnail.extension+"' height=100px />")
                    }
                })
         }


         $("#submitButton").click(function(){
             if ($('#searchVal').val() !== ''){
                 let search = $("#searchVal").val()
                 $("#charTable").html("")
                 searchAPI(search)
                 $("#searchVal").val('')
             }
          })

    })
})()
