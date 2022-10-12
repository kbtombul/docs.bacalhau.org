"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="Generate Realistic Images using styleGAN3",i={unversionedId:"examples/model-inference/StyleGAN3/index",id:"examples/model-inference/StyleGAN3/index",title:"Generate Realistic Images using styleGAN3",description:"Introduction",source:"@site/docs/examples/model-inference/StyleGAN3/index.md",sourceDirName:"examples/model-inference/StyleGAN3",slug:"/examples/model-inference/StyleGAN3/",permalink:"/examples/model-inference/StyleGAN3/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/StyleGAN3/index.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Speech Recognition using Whisper",permalink:"/examples/model-inference/Openai-Whisper/"},next:{title:"How To's",permalink:"/examples/workload-onboarding/"}},s={},u=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"Running StyleGAN3 locally",id:"running-stylegan3-locally",level:2},{value:"Building the docker image",id:"building-the-docker-image",level:2},{value:"<strong>Running the container on bacalhau</strong>",id:"running-the-container-on-bacalhau",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generate-realistic-images-using-stylegan3"},"Generate Realistic Images using styleGAN3"),(0,r.kt)("h2",{id:"introduction"},(0,r.kt)("strong",{parentName:"h2"},"Introduction")),(0,r.kt)("p",null,"With styleGAN3 we can generate realistic looking images, videos"),(0,r.kt)("p",null,"It can not only generate generate human faces but also animals, cars and landscapes"),(0,r.kt)("p",null,"styleGAN is based on GANs  Generative Adversarial Networks, In which there is generator and discriminator network, which is trained to discriminate images generated by generator to real images, during the training the generator tries to fool the discriminator, so the results is that it generates realistic looking images"),(0,r.kt)("h2",{id:"running-stylegan3-locally"},"Running StyleGAN3 locally"),(0,r.kt)("p",null," Note to run StyleGAN3 you need to match these ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NVlabs/stylegan3#requirements"},"requirements")),(0,r.kt)("p",null,"Cloning the repo, Installing dependencies and downloading the model weights"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/NVlabs/stylegan3\ncd stylegan3\nconda env create -f environment.yml\nconda activate stylegan3\nwget https://api.ngc.nvidia.com/v2/models/nvidia/research/stylegan3/versions/1/files/stylegan3-r-afhqv2-512x512.pkl\n")),(0,r.kt)("p",null,"Generate an image using pre-trained AFHQv2 model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python gen_images.py --outdir=out --trunc=1 --seeds=2 --network=stylegan3-r-afhqv2-512x512.pkl\n")),(0,r.kt)("p",null,"Viewing the output image"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/A3UExJr.png",alt:null})),(0,r.kt)("h2",{id:"building-the-docker-image"},"Building the docker image"),(0,r.kt)("p",null,"Instead of building an from scratch we add the following lines to the existing docker file in the repo, the following lines copy the the code files to the container and set some other variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"COPY . /scratch\n\nWORKDIR /scratch\n\nENV HOME /scratch\n")),(0,r.kt)("p",null,"This step is done in the docker run command but since we\u2019re running the command on a remote machine mounting local directory is not possible so we add this step to the Dockerfile"),(0,r.kt)("p",null,"To Build the docker container run the docker build command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Please replace"),(0,r.kt)("p",null,"<","hub-user> with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"Follow these instructions to create docker account"),", and use the username of the account you created"),(0,r.kt)("p",null,"<","repo-name> This is the name of the container, you can name it anything you want"),(0,r.kt)("p",null,"<","tag> This is not required but you can use the latest tag"),(0,r.kt)("p",null,"After you have build the container, the next step is to test it locally and then push it docker hub"),(0,r.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,r.kt)("h2",{id:"running-the-container-on-bacalhau"},(0,r.kt)("strong",{parentName:"h2"},"Running the container on bacalhau")),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,r.kt)("p",null,"This command is similar to what we have run locally but we change the output directory to the outputs folder so that the results are saved to IPFS"),(0,r.kt)("p",null,"We use the --gpu flag to denote the no of GPU we are going to use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau docker run \\\njsacex/stylegan3 \\\n--gpu 1 \\\n-- python gen_images.py --outdir=../outputs --trunc=1 --seeds=2 --network=stylegan3-r-afhqv2-512x512.pkl\n")),(0,r.kt)("p",null,"You can also run variations of this command to generate videos and other things"),(0,r.kt)("p",null,"In the following command we will Render a latent vector interpolation video."),(0,r.kt)("p",null,"  Which will Render a 4x2 grid of interpolations for seeds 0 through 31."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau docker run \\\njsacex/stylegan3 \\\n--gpu 1 \\\n-- python gen_video.py --output=../outputs/lerp.mp4 --trunc=1 --seeds=0-31 --grid=4x2 --network=stylegan3-r-afhqv2-512x512.pkl\n")),(0,r.kt)("p",null,"Parameters for gen_video.py\nAnimation length and seed keyframes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The animation length is either determined based on the --seeds value or explicitly\n\nspecified using the --num-keyframes option.\n\nWhen num keyframes is specified with --num-keyframes, the output video length\n\nwill be 'num_keyframes*w_frames' frames.\n\nIf --num-keyframes is not specified, the number of seeds given with\n\n--seeds must be divisible by grid size W*H (--grid).  In this case the\n\noutput video length will be '# seeds/(w*h)*w_frames' frames.\n")),(0,r.kt)("p",null,"Insalling bacalhau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Your system is linux_amd64\n\nBACALHAU CLI is detected:\nClient Version: v0.2.5\nServer Version: v0.2.5\nReinstalling BACALHAU CLI - /usr/local/bin/bacalhau...\nGetting the latest BACALHAU CLI...\nInstalling v0.2.5 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.2.5/bacalhau_v0.2.5_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.2.5/bacalhau_v0.2.5_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.2.5\nServer Version: v0.2.5\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!echo $(bacalhau docker run --wait --wait-timeout-secs 1000 --id-only --gpu 1 jsacex/stylegan3 -- python gen_images.py --outdir=../outputs --trunc=1 --seeds=2 --network=stylegan3-r-afhqv2-512x512.pkl) > job_id.txt\n!cat job_id.txt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"4f758052-0543-40b5-bd86-6ab41e77389a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!bacalhau list --id-filter $(cat job_id.txt)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 17:33:46 \x1b[0m\x1b[97;40m 4f758052 \x1b[0m\x1b[97;40m Docker jsacex/stable... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmcQEQPg934Pow... \x1b[0m\n")),(0,r.kt)("p",null,'Where it says "',(0,r.kt)("inlineCode",{parentName:"p"},"Completed "),'", that means the job is done, and we can get the results.'),(0,r.kt)("p",null,"To find out more information about your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!bacalhau describe $(cat job_id.txt)\n")),(0,r.kt)("p",null,"Since there is no error we can\u2019t see any error instead we see the state of our job to be complete, that means\nwe can download the results!\nwe create a temporary directory to save our results"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!mkdir results\n")),(0,r.kt)("p",null,"To Download the results of your job, run "),(0,r.kt)("hr",null),(0,r.kt)("p",null,"the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"! bacalhau get  $(cat job_id.txt)  --output-dir results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[90m17:38:25.343 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mbacalhau/get.go:67\x1b[0m\x1b[36m >\x1b[0m Fetching results of job '4f758052-0543-40b5-bd86-6ab41e77389a'...\n2022/09/29 17:38:25 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n\x1b[90m17:38:35.851 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:115\x1b[0m\x1b[36m >\x1b[0m Found 1 result shards, downloading to temporary folder.\n\x1b[90m17:38:37.1 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:195\x1b[0m\x1b[36m >\x1b[0m Combining shard from output volume 'outputs' to final location: '/content/results'\n")),(0,r.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"! ls results/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shards  stderr  stdout  volumes\n")))}p.isMDXComponent=!0}}]);