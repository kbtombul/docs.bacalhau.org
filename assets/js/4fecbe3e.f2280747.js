"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6063],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Oceanography - Data Conversion",sidebar_position:10},s="Oceanography - Data Conversion",l={unversionedId:"examples/data-engineering/oceanography-conversion/index",id:"examples/data-engineering/oceanography-conversion/index",title:"Oceanography - Data Conversion",description:"Open In Colab",source:"@site/docs/examples/data-engineering/oceanography-conversion/index.md",sourceDirName:"examples/data-engineering/oceanography-conversion",slug:"/examples/data-engineering/oceanography-conversion/",permalink:"/examples/data-engineering/oceanography-conversion/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/oceanography-conversion/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Oceanography - Data Conversion",sidebar_position:10},sidebar:"documentationSidebar",previous:{title:"BlockchainETL",permalink:"/examples/data-engineering/blockchain-etl/"},next:{title:"Molecular Dynamics",permalink:"/examples/molecular-dynamics/"}},i={},p=[{value:"Goal",id:"goal",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"The Data",id:"the-data",level:2},{value:"The Task - Large Scale Data Conversion",id:"the-task---large-scale-data-conversion",level:2},{value:"Upload the Data to IPFS",id:"upload-the-data-to-ipfs",level:3},{value:"Create a Docker Image to Process the Data",id:"create-a-docker-image-to-process-the-data",level:3},{value:"Test the Container Locally",id:"test-the-container-locally",level:3},{value:"Run a Bacalhau Job",id:"run-a-bacalhau-job",level:3},{value:"Get Results",id:"get-results",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oceanography---data-conversion"},"Oceanography - Data Conversion"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/oceanography-conversion/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering/oceanography-conversion/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"The Surface Ocean CO\u2082 Atlas (SOCAT) contains measurements of the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fugacity"},"fugacity")," of CO2 in seawater around the globe. But to calculate how much carbon the ocean is taking up from the atmosphere, these measurements need to be converted to the partial pressure of CO2. We will convert the units by combining measurements of the surface temperature and fugacity.  Python libraries (xarray, pandas, numpy) and the pyseaflux package facilitate this process."),(0,o.kt)("p",null,"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.socat.info/"},"https://www.socat.info/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://seaflux.readthedocs.io/en/latest/api.html?highlight=fCO2_to_pCO2#pyseaflux.fco2_pco2_conversion.fCO2_to_pCO2"},"https://seaflux.readthedocs.io/en/latest/api.html?highlight=fCO2_to_pCO2#pyseaflux.fco2_pco2_conversion.fCO2_to_pCO2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lgloege/bacalhau_socat_test/blob/main/main.py"},"https://github.com/lgloege/bacalhau_socat_test/blob/main/main.py")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wesfloyd/bacalhau_socat_test"},"https://github.com/wesfloyd/bacalhau_socat_test"))),(0,o.kt)("h3",{id:"goal"},"Goal"),(0,o.kt)("p",null,"The goal of this notebook is to investigate the data and convert dockerize the workload so that it can be executed on the Bacalhau network, to take advantage of the distributed storage and compute resources."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This example requires Docker. If you don't have Docker installed, you can install it from ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"here"),". Docker commands will not work on hosted notebooks like Google Colab, but the Bacalhau commands will."),(0,o.kt)("p",null,"Make sure you have the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau")," client installed by following the ",(0,o.kt)("a",{parentName:"p",href:"../../../getting-started/installation"},"getting started instructions")),(0,o.kt)("h2",{id:"the-data"},"The Data"),(0,o.kt)("p",null,"The raw data is available on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.socat.info/"},"SOCAT website"),". We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.socat.info/index.php/version-2021/"},"SOCATv2021"),' dataset in the "Gridded" format to perform this calculation. First, let\'s take a quick look at some data:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p inputs\ncurl --output ./inputs/SOCATv2022_tracks_gridded_monthly.nc.zip https://www.socat.info/socat_files/v2022/SOCATv2022_tracks_gridded_monthly.nc.zip\ncurl --output ./inputs/sst.mnmean.nc https://downloads.psl.noaa.gov/Datasets/noaa.oisst.v2/sst.mnmean.nc\n")),(0,o.kt)("p",null,"Next let's write the requirements.txt and install the dependencies. This file will also be used by the Dockerfile to install the dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile requirements.txt\nBottleneck==1.3.5\ndask==2022.2.0\nfsspec==2022.5.0\nnetCDF4==1.6.0\nnumpy==1.21.6\npandas==1.3.5\npip==22.1.2\npyseaflux==2.2.1\nscipy==1.7.3\nxarray==0.20.2\nzarr>=2.0.0\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt > /dev/null\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import fsspec # for reading remote files\nimport xarray as xr\nwith fsspec.open(\"./inputs/SOCATv2022_tracks_gridded_monthly.nc.zip\", compression='zip') as fp:\n    ds = xr.open_dataset(fp)\nds.info()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"time_slice = slice(\"2010\", \"2020\") # select a decade\nres = ds['sst_ave_unwtd'].sel(tmnth=time_slice).mean(dim='tmnth') # average over time\nres.plot() # plot the result\n\n")),(0,o.kt)("p",null,"We can see that the dataset contains lat-long coordinates, the date, and a series of seawater measurements. Above you can see a plot of the average surface sea temperature (sst) between 2010-2020, where recording buoys and boats have travelled."),(0,o.kt)("h2",{id:"the-task---large-scale-data-conversion"},"The Task - Large Scale Data Conversion"),(0,o.kt)("p",null,"The goal of this notebook is to convert the data from fugacity of CO2 (fCO2) to partial pressure of CO2 (pCO2). This is a common task in oceanography, and is performed by combining the measurements of the surface temperature and fugacity. The conversion is performed by the ",(0,o.kt)("a",{parentName:"p",href:"https://seaflux.readthedocs.io/en/latest/api.html?highlight=fCO2_to_pCO2#pyseaflux.fco2_pco2_conversion.fCO2_to_pCO2"},"pyseaflux")," package."),(0,o.kt)("p",null,"To execute this workload on the Bacalhau network we need to perform three steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upload the data to IPFS"),(0,o.kt)("li",{parentName:"ol"},"Create a docker image with the code and dependencies"),(0,o.kt)("li",{parentName:"ol"},"Run the docker image on the Bacalhau network using the IPFS data")),(0,o.kt)("h3",{id:"upload-the-data-to-ipfs"},"Upload the Data to IPFS"),(0,o.kt)("p",null,'The first step is to upload the data to IPFS. The simplest way to do this is to use a third party service to "pin" data to the IPFS network, to ensure that the data exists and is available. To do this you need an account with a pinning service like ',(0,o.kt)("a",{parentName:"p",href:"https://web3.storage/"},"web3.storage")," or ",(0,o.kt)("a",{parentName:"p",href:"https://pinata.cloud/"},"Pinata"),". Once registered you can use their UI or API or SDKs to upload files."),(0,o.kt)("p",null,"For the purposes of this example I:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Downloaded the latest monthly data from the ",(0,o.kt)("a",{parentName:"li",href:"https://www.socat.info/"},"SOCAT website")),(0,o.kt)("li",{parentName:"ol"},"Downloaded the latest long-term global sea surface temperature data from ",(0,o.kt)("a",{parentName:"li",href:"https://downloads.psl.noaa.gov/Datasets/noaa.oisst.v2/sst.mnmean.nc"},"NOAA")," - information about that dataset can be found ",(0,o.kt)("a",{parentName:"li",href:"https://psl.noaa.gov/data/gridded/data.noaa.oisst.v2.highres.html"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"Pinned the data to IPFS")),(0,o.kt)("p",null,"This resulted in the IPFS CID of ",(0,o.kt)("inlineCode",{parentName:"p"},"bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y"),"."),(0,o.kt)("h3",{id:"create-a-docker-image-to-process-the-data"},"Create a Docker Image to Process the Data"),(0,o.kt)("p",null,"Next we will create the docker image that will process the data. The docker image will contain the code and dependencies needed to perform the conversion. This code originated with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lgloege/bacalhau_socat_test"},"lgloege")," via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wesfloyd/bacalhau_socat_test/"},"wesfloyd"),". Thank you! \ud83e\udd17"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more information about working with custom containers, see the ",(0,o.kt)("a",{parentName:"p",href:"../../workload-onboarding/custom-containers/"},"custom containers example"),".")),(0,o.kt)("p",null,"The key thing to watch out for here is the paths to the data. I'm using the default bacalhau output directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/outputs")," to write my data to. And the input data is mounted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," directory. But as you will see in a moment, web3.storage has added another ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," directory that we need to account for."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile main.py\nimport fsspec\nimport xarray as xr\nimport pandas as pd\nimport numpy as np\nimport pyseaflux\n\n\ndef lon_360_to_180(ds=None, lonVar=None):\n    lonVar = "lon" if lonVar is None else lonVar\n    return (ds.assign_coords({lonVar: (((ds[lonVar] + 180) % 360) - 180)})\n            .sortby(lonVar)\n            .astype(dtype=\'float32\', order=\'C\'))\n\n\ndef center_dates(ds):\n    # start and end date\n    start_date = str(ds.time[0].dt.strftime(\'%Y-%m\').values)\n    end_date = str(ds.time[-1].dt.strftime(\'%Y-%m\').values)\n\n    # monthly dates centered on 15th of each month\n    dates = pd.date_range(start=f\'{start_date}-01T00:00:00.000000000\',\n                          end=f\'{end_date}-01T00:00:00.000000000\',\n                          freq=\'MS\') + np.timedelta64(14, \'D\')\n\n    return ds.assign(time=dates)\n\n\ndef get_and_process_sst(url=None):\n    # get noaa sst\n    if url is None:\n        url = ("/inputs/sst.mnmean.nc")\n\n    with fsspec.open(url) as fp:\n        ds = xr.open_dataset(fp)\n        ds = lon_360_to_180(ds)\n        ds = center_dates(ds)\n        return ds\n\n\ndef get_and_process_socat(url=None):\n    if url is None:\n        url = ("/inputs/SOCATv2022_tracks_gridded_monthly.nc.zip")\n\n    with fsspec.open(url, compression=\'zip\') as fp:\n        ds = xr.open_dataset(fp)\n        ds = ds.rename({"xlon": "lon", "ylat": "lat", "tmnth": "time"})\n        ds = center_dates(ds)\n        return ds\n\n\ndef main():\n    print("Load SST and SOCAT data")\n    ds_sst = get_and_process_sst()\n    ds_socat = get_and_process_socat()\n\n    print("Merge datasets together")\n    time_slice = slice("1981-12", "2022-05")\n    ds_out = xr.merge([ds_sst[\'sst\'].sel(time=time_slice),\n                       ds_socat[\'fco2_ave_unwtd\'].sel(time=time_slice)])\n\n    print("Calculate pco2 from fco2")\n    ds_out[\'pco2_ave_unwtd\'] = xr.apply_ufunc(\n        pyseaflux.fCO2_to_pCO2,\n        ds_out[\'fco2_ave_unwtd\'],\n        ds_out[\'sst\'])\n\n    print("Add metadata")\n    ds_out[\'pco2_ave_unwtd\'].attrs[\'units\'] = \'uatm\'\n    ds_out[\'pco2_ave_unwtd\'].attrs[\'notes\'] = ("calculated using" +\n                                               "NOAA OI SST V2" +\n                                               "and pyseaflux package")\n\n    print("Save data")\n    ds_out.to_zarr("/processed.zarr")\n    import shutil\n    shutil.make_archive("/outputs/processed.zarr", \'zip\', "/processed.zarr")\n    print("Zarr file written to disk, job completed successfully")\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM python:slim\n\nRUN apt-get update && apt-get -y upgrade \\\n    && apt-get install -y --no-install-recommends \\\n    g++ \\\n    && rm -rf /var/lib/apt/lists/*\n\nWORKDIR /project\n\nCOPY ./requirements.txt /project\n\nRUN pip3 install -r requirements.txt\n\nCOPY ./main.py /project\n\nCMD ["python","main.py"]\n')),(0,o.kt)("h3",{id:"test-the-container-locally"},"Test the Container Locally"),(0,o.kt)("p",null,"Before we upload the container to the Bacalhau network, we should test it locally to make sure it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    -v $(pwd)/inputs:/inputs \\\n    -v $(pwd)/outputs:/outputs \\\n    ghcr.io/bacalhau-project/examples/socat:0.0.11\n")),(0,o.kt)("h3",{id:"run-a-bacalhau-job"},"Run a Bacalhau Job"),(0,o.kt)("p",null,"Now that we have the data in IPFS and the docker image pushed, we can run a job on the Bacalhau network."),(0,o.kt)("p",null,"I find it useful to first run a simple test with a known working container to ensure the data is located in the place I expect, because some storage providers add their own opinions. E.g. web3.storage wraps the directory uploads in a top level directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf stdout stderr volumes shards\nbacalhau docker run \\\n        --download \\\n        --inputs bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y \\\n        ubuntu -- ls /inputs\n")),(0,o.kt)("p",null,"Then I like to run a simple test with my custom container ..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf stdout stderr volumes shards\nbacalhau docker run \\\n    --inputs bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y \\\n    --download \\\n    ghcr.io/bacalhau-project/examples/socat:0.0.11 -- ls -la /inputs/\n")),(0,o.kt)("p",null,"And finally let's run the full job. This time I will not download the data immediately, because the job takes around 100s. And it takes another few minutes to download the results. The commands are below, but you will need to wait until the job completes before they work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n        --inputs bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y \\\n        --id-only \\\n        --wait \\\n        ghcr.io/bacalhau-project/examples/socat:0.0.11 -- python main.py\n")),(0,o.kt)("h2",{id:"get-results"},"Get Results"),(0,o.kt)("p",null,"Now let's download and display the result from the results directory. We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau get")," command to download the results from the output data volume. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--output-dir")," argument specifies the directory to download the results to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results\nmkdir -p ./results # Temporary directory to store the results\nbacalhau get --output-dir ./results ${JOB_ID} # Download the results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ./results/stdout\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls ./results/volumes/outputs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import shutil\nshutil.unpack_archive("./results/volumes/outputs/processed.zarr.zip", "./results/volumes/outputs/")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import xarray as xr\nds = xr.open_dataset(\"./results/volumes/outputs/\", engine='zarr')\nds.info()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ds['pco2_ave_unwtd'].mean(dim='time').plot()\n")))}u.isMDXComponent=!0}}]);