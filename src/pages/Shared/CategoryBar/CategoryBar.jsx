import { useState } from 'react';
import MegaMenu from '../../Home/MegaMenu/MegaMenu';

const CategoryBar = () => {
    const [value, setValue] = useState(0);
    const [sizes, setSizes] = useState('');

    const handleRangeChange = (event) => {
        const pricingValue = event.target.value;
        setValue(pricingValue);
        console.log('Pricing:', pricingValue); // Log the pricing value
    };

    const handleSizeChange = (event) => {
        const selectedSize = event.target.value;
        setSizes(selectedSize);
        console.log('Size:', selectedSize); // Log the selected size
    };

    return (
        <>
            <div className="border-bottom pb-4 mb-5">
                <MegaMenu />
            </div>
            <div className="border-bottom pb-4 mb-5">
                <h2 className="mb-3">Pricing</h2>
                <div className='font2 fs-3 text-center text-secondary'>({value})</div>
                <div className="text-end">
                    <input type="range" className="w-75 me-4" id="vol" name="vol" min="0" max="20000" onChange={handleRangeChange} />
                </div>
            </div>
            <div className="border-bottom pb-4 mb-5">
                <h2 className="mb-3">Size</h2>
                <div className='ms-3'>
                    <label className='d-flex gap-2'>
                        <input
                            type="radio"
                            name="size"
                            value="small"
                            checked={sizes === 'small'}
                            onChange={handleSizeChange}
                        />
                        Small
                    </label>

                    <label className='d-flex gap-2'>
                        <input
                            type="radio"
                            name="size"
                            value="medium"
                            checked={sizes === 'medium'}
                            onChange={handleSizeChange}
                        />
                        Medium
                    </label>

                    <label className='d-flex gap-2'>
                        <input
                            type="radio"
                            name="size"
                            value="large"
                            checked={sizes === 'large'}
                            onChange={handleSizeChange}
                        />
                        Large
                    </label>

                    <label className='d-flex gap-2'>
                        <input
                            type="radio"
                            name="size"
                            value="xl"
                            checked={sizes === 'xl'}
                            onChange={handleSizeChange}
                        />
                        XL
                    </label>
                </div>
            </div>
        </>
    );
};

export default CategoryBar;
