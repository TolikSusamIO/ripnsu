import React from 'react'
import { useTranslation } from 'react-i18next';

function Error() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className='error'>{t("error.error")}</h1>
    </div>
  )
}

export default Error
