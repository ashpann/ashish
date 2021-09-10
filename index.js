const express = require("express")
const { CanvasRenderService } = require('chartjs-node-canvas');
let app = express()

var configuration = {
    type: 'line',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
                label: 'Scored',
                data: [2478,5267,734,784,433],
                fill: false,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                ],
                
    }]},
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                
                beginAtZero: true
            }
        }
    }
}


const mkChart = async (params) => {
    const canvasRenderService = new CanvasRenderService(400, 400)
    return await canvasRenderService.renderToBuffer(configuration);
}

app.get('/chart', async function (req, res) {
    var image = await mkChart(req.query)
    res.type("image/png")
    res.send(image) 
})

app.listen(3061, () => {

})