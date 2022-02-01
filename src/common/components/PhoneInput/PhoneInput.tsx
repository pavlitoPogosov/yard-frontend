import React, { useEffect, useState } from 'react'

import { Input, TInputProps } from 'src/common/components/Input/Input'

export type TPhoneInputProps = TInputProps & {
  mask?: any
}

export const PhoneInput = React.forwardRef<any, TPhoneInputProps>(
  ({ value, ...otherProps }, ref) => {
    const [finalValue, setFinalValue] = useState('+ 7')

    return (
      <>
        <Input ref={ref} value={finalValue} {...otherProps} />
      </>
    )
  }
)
