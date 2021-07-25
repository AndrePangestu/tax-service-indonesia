import React, { useState } from 'react'
import LayoutPages from '../components/LayoutPages'
import { ButtonStyles, ContainerStyles, FlexboxStyles, InputStyles } from '../components/Styles'
import { numberToMoney } from '../utils/format'

export default function TaxSchemePages() {

  const [income, setIncome] = useState('')
  const [showAnnualIncome, setAnnualIncome] = useState('')
  const [resultTax, setResultTax] = useState('')
  const [status, setStatus] = useState('')
  const taxReliefArr = [
    {
      title: 'TK0 - Single',
      value: 54000000
    },
    {
      title: 'K0 - Married with no dependant',
      value: 58500000
    },
    {
      title: 'K1 - Married with 1 dependant',
      value: 63000000
    },
    {
      title: 'K2 - Married with 2 dependant',
      value: 67500000
    },
    {
      title: 'K3 - Married with 3 dependant',
      value: 72000000
    }
  ]

  const taxCalculation = (e) => {
    e.preventDefault();
    let annualIncome = income * 12 - status;
    setAnnualIncome(numberToMoney(annualIncome))
    let annualTax;

    if(annualIncome > 500000000){
      annualTax = (50000000 * 0.05) + (200000000 * 0.15) + (250000000 * 0.25) + ((annualIncome - 500000000) * 0.30)
      setResultTax(numberToMoney(annualTax))

    } else if(annualIncome > 250000000 && annualIncome <= 500000000) {
      annualTax = (50000000 * 0.05) + (200000000 * 0.15) + ((annualIncome - 250000000) * 0.25)
      setResultTax(numberToMoney(annualTax))

    } else if(annualIncome > 50000000 && annualIncome <= 250000000) {
      if(annualIncome - 50000000 > 200000000){
        annualTax = (50000000 * 0.05) + ((annualIncome - 200000000) * 0.15)
        setResultTax(numberToMoney(annualTax))
      } else {
        annualTax = (50000000 * 0.05) + ((annualIncome - 50000000) * 0.15)
        setResultTax(numberToMoney(annualTax))
      }

    } else if (annualIncome > 0 && annualIncome <= 50000000) {
      annualTax = (annualIncome * 0.05)
      setResultTax(numberToMoney(annualTax))
    } else {
      annualTax = 0
      setResultTax(numberToMoney(annualTax))
    }
  }

  const handleSelect = (e) => {
    setStatus(e.target.value)
  }

  return (
    <LayoutPages>
      <ContainerStyles
        margin="20px"
      >
        <h1>Tax Calculation</h1>
        <FlexboxStyles 
          column
          alignItems="center"
        >
          <form onSubmit={taxCalculation}>
            <FlexboxStyles
              alignItems="center"
            >
              <span>Monthly Salary : </span>
              <InputStyles
                type="number" 
                margin="10px" 
                onChange={(e) => setIncome(e.target.value)}
                required
                data-testid="income-input"
              />
            </FlexboxStyles>

            <FlexboxStyles>
              <span>Status : </span>
              <select onChange={handleSelect} required>
                <option value="">Input Status</option>
                {taxReliefArr.map((data, i) => {
                  return(
                    <option
                      key={i}
                      value={data.value}
                    >
                      {data.title}
                    </option>
                  )
                })}
              </select>
            </FlexboxStyles>
            
            <ButtonStyles
              type="submit"
              margin="10px"
            >
              Calculate Tax
            </ButtonStyles>
          </form>

          <ContainerStyles
            margin="10px"
          >
            <ContainerStyles>
              <span>
                Annual taxable income = <b>{showAnnualIncome}</b> {showAnnualIncome ? ' IDR' : ''}
              </span>
            </ContainerStyles>
            <ContainerStyles>
              <span>
                Annual tax income = <b>{resultTax}</b> {resultTax ? ' IDR' : ''}
              </span>
            </ContainerStyles>
          </ContainerStyles>
        </FlexboxStyles>
      </ContainerStyles>

    </LayoutPages>
  )
}
