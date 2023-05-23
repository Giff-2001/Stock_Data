import React from 'react'

const StyleGuide = () => {
  return (
    <div id='design-main-container'>
        <div className='section-container'>
            <div className='grid-auto'>
                <div>
                    <h2 className='m-5'>Font-families</h2>
                    <h3 className='primary-ff'>Primary Font Family</h3>
                    <h3 className='secondary-ff'>Secondary Font Family</h3>
                    <h3 className='tertiary-ff'>Tertiary Font Family</h3>
                    <div>
                        <h2 className='m-10'>Colors:</h2>
                        <div>
                        <div className="color primary-blue"><p>#FF0000</p></div>
                        <div className="color secondary-blue"><p>#F40000</p></div>
                        <div className="color tertiary-blue"><p>#E50000</p></div>
                        <div className="color primary-gray"><p>#808080</p></div>
                        <div className="color secondary-gray"><p>#A0A0A0</p></div>
                        <div className="color tertiary-gray"><p>#C0C0C0</p></div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <h2>Font-sizes</h2>
                    <h3 className='fs-900'>Stock Data - 900</h3>
                    <h3 className='fs-800'>Stock Data - 800</h3>
                    <h3 className='fs-700'>Stock Data - 700</h3>
                    <h3 className='fs-600'>Stock Data - 600</h3>
                    <h3 className='fs-500'>Stock Data - 500</h3>
                    <h3 className='fs-400'>Stock Data - 400</h3>
                    <h3 className='fs-300'>Stock Data - 300</h3>
                    <h3 className='fs-200'>Stock Data - 200</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StyleGuide