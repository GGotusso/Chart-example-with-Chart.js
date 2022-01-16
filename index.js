let mychart = document.getElementById('Mychart').getContext('2d');
         
         Chart.defaults.global.defaultFontFamily = 'Lato';
         Chart.defaults.global.defaultFontSize = 18;
         

         let masspop = new Chart (mychart, {
             type:'bar',
             data: {
                 labels:['China','India','United States','Indonesia','Pakistan'],
                 datasets:[{
                     label:'population',
                     data:[
                     1407098834,
                     1380721926,
                     331893745,
                     275122131,
                     238181034

                     ],
                     backgroundColor: [
                        '#C37491',
                        '#8ABED6',
                        '#54747A',
                        '#18A4E6',
                        '#C94FAE',

                     ],

                     borderWidth:1,
                     borderColor: '#777',
                     hoverBorderColor: '#000',
                     hoverBorderWidth:2
                   
                    }]
             },
             options:{
                maintainAspectRatio:true,
                 title:{
                     display:true,
                     text: 'Top 5 Larges countrys in the world'
                 }
             }
         })