
import excel from "exceljs"
//read complete row
export async function readExcel(
    filepath:string,
    sheetName:string
):Promise<any[][]>{
    let book= new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetName)

    let data:any[][]=[]

    sheet?.eachRow((row)=>{
        let rowData:any[]=[]
        row.eachCell((cell)=>{
            rowData.push(cell.value)
        })
        data.push(rowData)
    })
    return data
}

//read data from single row
export async function getRowValues(
    filepath: string,
    sheetName: string,
    rowNumber: number
) {
    let book = new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet = await book.getWorksheet(sheetName)
    let row = sheet?.getRow(rowNumber)

    let rowData: any[] = []

    row?.eachCell((cell) => {
        rowData.push(cell.toString())
    })

    return rowData
}

// read the data from specfic row


export async function getCellValue(
    filepath:string,
    sheetName:string,
    rowNumber:number,
    cellNumber:number
){
    let book= new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetName)

    // let value=sheet?.getRow(rowNumber).getCell(cellNumber).value
    // return String(value)

    let value=sheet?.getRow(rowNumber).getCell(cellNumber).toString()
    return value
}

//update the existing excel name

export async function writeExcel(
    filepath:string,
    sheetName:string,
    rowNumber:number,
    cellNumber:number,
    value:any
){
  let book= new excel.Workbook()
  await book.xlsx.readFile(filepath)
  let sheet=await book.getWorksheet(sheetName)

  sheet!.getCell(rowNumber,cellNumber).value=value
  await book.xlsx.writeFile(filepath)

  //not returing anything because we are just update not reading/creating anything
}

