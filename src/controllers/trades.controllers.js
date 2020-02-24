import * as tradeService from '../services/trade.service'
import models, { sequelize } from '../models'

export const getTrades = async (req, res) => {
    try {
        const data = await tradeService.getTrades(req)
        return res.status(200).send(data)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}