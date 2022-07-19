#! /bin/sh
# PR Script: Chequea de que rama esta viniendo el cambio para levantar el entorno de prueba correspondiente.
# Save image name to env variable
export CURRENT_IMAGE_NAME=`make get-image`
export COMMIT_MESSAGE=`git log --format=%B -n 1 $BITBUCKET_COMMIT`

# Config git to make commits and push
git config --global user.name "PatagoniaChic Storybook Pipeline"
git config --global user.email pipeline@patagonia-chic-storybook.com

# Clone k8s repo
git clone git@bitbucket.org:patagoniachic/k8s-specs.git ~/k8s-specs
cd ~/k8s-specs

# Update production environment when a commit is pushed to master
if [[ "$BITBUCKET_BRANCH" =~ ^master ]]; then
    echo "Editando archivo de spec para master"
    yq -i e '.spec.template.spec.containers[0].image = strenv(CURRENT_IMAGE_NAME)' apps/storybook/deployment.yml
    git commit -am "[patagonia-chic-api] Updated image from production deployment"
    git push
fi

# Update production environment when a commit is pushed to master
if [[ "$BITBUCKET_BRANCH" =~ ^develop ]]; then
    echo "Editando archivo de spec para develop"
    yq -i e '.spec.template.spec.containers[0].image = strenv(CURRENT_IMAGE_NAME)' apps/storybook/deployment.yml
    git commit -am "[patagonia-chic-api] Updated image from develop deployment"
    git push
fi

