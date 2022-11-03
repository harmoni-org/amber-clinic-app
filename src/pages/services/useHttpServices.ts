import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Settings from "../../assets/settings/settings.json";
import Categories from "../../assets/settings/categories";
import { useTranslation } from "react-i18next";

const useHttpServices = () => {
    const [data,setData] = useState<unknown>();
    const [error,setError] = useState<AxiosError>();
    const [loading,setLoading] = useState(false);
    const { i18n } = useTranslation();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`${Settings["wordpress-api-base-url"]}posts/?categories=${Categories[i18n.language]}&per_page=100`)
        .then((response) => setData(response.data))
        .catch((err) => { setError(err)})
        .finally(() => { setLoading(false)});
    }, [])

    return [data, loading, error];
}

export default useHttpServices;