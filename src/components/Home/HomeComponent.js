import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './i18n/i18n'

export default function HomeComponent() {

    const { t } = useTranslation();
    const changeFrench = () => {
        i18n.changeLanguage("fr");
    }
    const changeEnglish = () => {
        i18n.changeLanguage("en");
    }
    return (
        <div class="container">
            <div class="card my-5">
                <div class="card-body">
                    <h5 class="card-title">{t("title")}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{t("subtitle")}</h6>
                    <p class="card-text">{t("content")}</p>
                    <button class="card-link btn btn-primary" onClick={changeFrench}>{t("french")}</button>
                    <button class="card-link btn btn-primary" onClick={changeEnglish}>{t("english")}</button>
                </div>
            </div>
        </div >
    )
}
