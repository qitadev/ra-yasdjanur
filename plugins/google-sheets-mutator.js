const SPREADSHEET_ID = '1KqIWK5A7ldwdlcp4NLvxzIK4hE4B0g4ZePK7u0jBecg'
const API_KEY = process.env.GOOGLE_SHEET_API_KEY
const GET_SHEETS_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/?key=${API_KEY}&includeGridData=true`

async function getSheetData (sheetIndex) {
  const result = await fetch(GET_SHEETS_ENDPOINT)
  const { sheets } = await result.json()
  const sheet = sheets[sheetIndex]

  const columns = []
  const data = []
  for (let i = 0; i < sheet.data[0].rowData.length; i++) {
    const { values } = sheet.data[0].rowData[i]
    if (!values || values[0].formattedValue === undefined) {
      break
    }
    if (i === 0) {
      for (const value of values) {
        if (value.formattedValue) {
          columns.push(value.formattedValue)
        }
      }
    } else {
      const item = {}
      for (let j = 0; j < columns.length; j++) {
        item[columns[j]] = values[j]?.formattedValue
      }
      data.push(item)
    }
  }
  return data
}

export default (_, inject) => {
  inject('getSheetData', getSheetData)
}
