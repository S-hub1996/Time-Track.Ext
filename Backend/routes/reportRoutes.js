const { Router } = require('express')
const ReportModel = require('../models/report')

const ReportRouter = Router()

ReportRouter.get('/', async (req, res) => {
    try{
        const reports = await ReportModel.find()
        res.status(200).send(reports)
    }
    catch(err){
        res.status(500).send({error: err.message})
    }
})

ReportRouter.post('/', async (req, res) => {
    try{
        let report = new ReportModel(req.body)
        await report.save()
        return res.status(200).send(report)
    }
    catch(err){
        res.status(500).send({error: err.message})
    }
})

ReportRouter.delete('/:id', async(req, res) => {
    const reports = await ReportModel.find()
    reports.remove({
      id: req.params.id
    }), function (err, user) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'Deleted' });
    };
});

module.exports = ReportRouter;